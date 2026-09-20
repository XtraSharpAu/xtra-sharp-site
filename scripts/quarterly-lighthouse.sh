#!/usr/bin/env bash
# Quarterly Lighthouse audit — Performance, Accessibility, SEO across every live route.
# Usage: npm run lighthouse:quarterly
# See docs/maintenance-automation.md for full documentation, setup, and how to read the report.
set -euo pipefail

cd "$(dirname "$0")/.."

PORT="${LIGHTHOUSE_PORT:-4173}"
BASE_URL="http://localhost:${PORT}"
CHROME_PATH="${CHROME_PATH:-/opt/pw-browsers/chromium}"
OUT_DIR="docs/quarterly-reports"
QUARTER_TAG="$(date +%Y)-Q$(( ($(date +%-m) - 1) / 3 + 1 ))"
OUT_FILE="${OUT_DIR}/${QUARTER_TAG}.json"
LIGHTHOUSE_VERSION="13.5.0"
FAIL_THRESHOLD=90

ROUTES=(
  "/"
  "/knife-sharpening"
  "/scissors-sharpening"
  "/clipper-blades"
  "/garden-tools"
  "/processor-blades"
  "/pricing"
  "/mail-in"
  "/service-area"
  "/faq"
  "/contact"
  "/about"
  "/services"
  "/how-it-works"
  "/commercial"
  "/batch"
  "/tips"
  "/gallery"
  "/terms"
  "/privacy"
  "/thank-you"
)

mkdir -p "$OUT_DIR"
TMP_DIR="$(mktemp -d)"
cleanup() {
  if [ -n "${SERVER_PID:-}" ]; then
    pkill -9 -P "$SERVER_PID" 2>/dev/null || true
    kill -9 "$SERVER_PID" 2>/dev/null || true
  fi
  # `next start`'s child process (next-server) doesn't expose the port in its
  # command line, so it can't be targeted by PID alone — it's matched by name.
  # Safe to assume only one is running at a time on a maintenance box.
  pkill -9 -f "next-server" 2>/dev/null || true
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

echo "==> Building production bundle..."
npm run build

echo "==> Starting production server on port ${PORT}..."
PORT="$PORT" npm run start >"${TMP_DIR}/server.log" 2>&1 &
SERVER_PID=$!

echo "==> Waiting for server to become ready..."
for i in $(seq 1 30); do
  if curl -sSf "${BASE_URL}/" -o /dev/null 2>/dev/null; then
    break
  fi
  sleep 1
  if [ "$i" -eq 30 ]; then
    echo "Server did not start within 30s. Log:"
    cat "${TMP_DIR}/server.log"
    exit 1
  fi
done

echo "==> Running Lighthouse ${LIGHTHOUSE_VERSION} against ${#ROUTES[@]} routes..."
echo "{}" >"${TMP_DIR}/report.json"

for route in "${ROUTES[@]}"; do
  slug="${route:1}"
  [ -z "$slug" ] && slug="home"
  slug="${slug//\//-}"
  report_json="${TMP_DIR}/${slug}.json"

  echo "  - ${route}"
  CHROME_PATH="$CHROME_PATH" npx -y "lighthouse@${LIGHTHOUSE_VERSION}" \
    "${BASE_URL}${route}" \
    --only-categories=performance,accessibility,seo \
    --output=json \
    --output-path="$report_json" \
    --chrome-flags="--headless=new --no-sandbox --disable-gpu" \
    --quiet >/dev/null 2>&1

  perf=$(jq -r '.categories.performance.score * 100 | round' "$report_json")
  a11y=$(jq -r '.categories.accessibility.score * 100 | round' "$report_json")
  seo=$(jq -r '.categories.seo.score * 100 | round' "$report_json")

  jq -n --arg route "$route" --argjson perf "$perf" --argjson a11y "$a11y" --argjson seo "$seo" \
    '{route: $route, performance: $perf, accessibility: $a11y, seo: $seo}' \
    >"${TMP_DIR}/${slug}.summary.json"
done

jq -s \
  --arg quarter "$QUARTER_TAG" \
  --arg generatedAt "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --arg lighthouseVersion "$LIGHTHOUSE_VERSION" \
  --argjson threshold "$FAIL_THRESHOLD" \
  '{
    quarter: $quarter,
    generatedAt: $generatedAt,
    lighthouseVersion: $lighthouseVersion,
    failThreshold: $threshold,
    pages: .,
    flagged: [ .[] | select(.performance < $threshold or .accessibility < $threshold or .seo < $threshold) ]
  }' \
  "${TMP_DIR}"/*.summary.json >"$OUT_FILE"

echo "==> Report written to ${OUT_FILE}"

FLAGGED_COUNT=$(jq '.flagged | length' "$OUT_FILE")
if [ "$FLAGGED_COUNT" -gt 0 ]; then
  echo ""
  echo "⚠ ${FLAGGED_COUNT} page(s) scored below ${FAIL_THRESHOLD} in at least one category:"
  jq -r '.flagged[] | "  - \(.route): performance=\(.performance) accessibility=\(.accessibility) seo=\(.seo)"' "$OUT_FILE"
  exit 2
else
  echo ""
  echo "✓ All ${#ROUTES[@]} pages scored ${FAIL_THRESHOLD}+ in performance, accessibility, and SEO."
fi
