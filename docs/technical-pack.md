# Advanced Technical Pack

General sharpening-trade knowledge and internal process documentation. Deep-dive explanations of edge geometry, burr formation, and steel types are covered in full in `docs/long-form-content/` (see cross-references below) rather than duplicated here — this document consolidates the reference material and adds the workflow/QC documentation that doesn't exist elsewhere.

## Deep Sharpening Theory

- **Edge geometry** (angle vs. durability trade-off, V-edge vs. convex): full explainer in `docs/long-form-content/10-edge-geometry-explained.md`.
- **Burr formation**: every sharpening pass raises a microscopic burr — a thin, displaced flap of metal along the edge. A blade can feel sharp with the burr still attached (the burr itself has a fine edge), but it folds over almost immediately in use, leaving a dull, ragged result within days. Proper burr removal — fully detaching it, not just thinning it — is a distinct step after edge-forming, not an automatic side effect of grinding. Full detail in `docs/long-form-content/01-knife-sharpening.md`.
- **Temper protection**: a blade's temper is the heat-treatment balance between hardness (edge-holding) and toughness (chip resistance), set during manufacturing. Sharpening-generated heat can compromise it if not managed — this is the core reason water-cooled sharpening exists. Full detail in `docs/long-form-content/03-water-cooled-vs-dry-grinding.md` (in `docs/marketing-pack/blog-posts/`).

## Water-Cooled Sharpening Science

A continuous flow of water across the blade and grinding surface carries away frictional heat as fast as it's generated, keeping the steel at a safe temperature throughout the process. Without this, fast dry-grinding can heat the edge enough to affect temper — sometimes visibly, as a straw or blue discolouration right at the edge, which indicates real heat damage. Used for knives, garden tools, and processor blades — categories where a thicker, single-bevel edge and genuine steel-durability requirements make heat management the priority.

## Machine-Guided Sharpening Science

Scissors and clipper blades are two-part systems (two scissor blades; a cutting blade and comb blade for clippers) where performance depends on more than one blade's edge in isolation — angle, ride line/tracking, tension, and alignment all have to be correct together. Machine-guided sharpening uses a controlled, repeatable process to address all of these factors as one system, rather than grinding each blade's edge independently and hoping the pair still works together afterward. Full detail in `docs/long-form-content/02-scissors-sharpening.md` and `03-clipper-blade-maintenance.md`.

## Steel Types and Sharpening Behaviour

Full explainer in `docs/long-form-content/09-steel-types-and-sharpening.md` — summary: stainless steel resists corrosion but is often softer (needs more frequent light maintenance); carbon steel takes a finer edge and holds it longer but rusts more readily; hardness (Rockwell C scale) trades off against brittleness, which is part of why edge angle isn't universal across steel types.

## Reference: Typical Sharpening Angles by Tool Type

These are general sharpening-trade reference ranges, not a claim about the exact angle used on every individual item (which is adjusted based on the specific blade's condition, steel, and intended use — see `docs/long-form-content/10-edge-geometry-explained.md`):

| Tool type | Typical edge angle range (per side) | Why |
|---|---|---|
| Fine kitchen/paring knives | ~15–17° | Prioritises cutting ease for controlled, delicate work |
| Standard/chef's/butcher knives | ~17–20° | Balances sharpness with everyday durability |
| Large knives, hunting knives | ~20–22° | More durability for tougher material and outdoor use |
| Garden tools (secateurs, shears) | ~20–25° | Durability against tougher plant material and repeated impact |
| Axes | ~25–30°+ | Maximum durability for high-impact use against wood |
| Scissors (bevel) | Single flat bevel, angle varies by scissors design | Matched to original manufacturer geometry |
| Scissors (convex) | Continuous curve, no fixed angle | Hollow-ground for maximum smoothness of cut |

## Sharpening Workflow Documentation

1. **Intake** — item received (drop-off or mail-in) and logged against the customer's booking/contact.
2. **Condition assessment** — inspected for damage, existing angle/edge state, and suitability for standard sharpening. Anything unusual is flagged before work proceeds (customer contacted if needed).
3. **Method selection** — water-cooled or machine-guided, per item type (see `docs/schema.md`'s master pricing table for the category breakdown).
4. **Restoration pass** (if needed) — removing damage or correcting a drifted angle before final edge-forming.
5. **Edge-forming pass** — the main sharpening grind, at the correct angle for that item.
6. **Burr removal** — a distinct step, not assumed to happen automatically during grinding.
7. **Tension/alignment pass** (scissors and clipper blades only) — restoring ride line, tension, and tracking alongside the edge.
8. **Cleaning** — removing swarf/residue from the sharpening process itself.
9. **Quality check** (see checklist below).
10. **Return** — handed back at drop-off, or packed and posted for mail-in with tracked return postage.

## Sharpening Quality Control Checklist

- [ ] Edge is even along the full length of the blade — no unsharpened sections
- [ ] No visible burr remaining (checked by feel/light, not assumed from the grinding step alone)
- [ ] No visible heat damage (no straw/blue discolouration at the edge)
- [ ] Correct angle for the item type, consistent on both sides (or correctly asymmetric, if that's the item's design)
- [ ] For scissors/clipper blades: ride line, tension, and alignment checked, not just edge sharpness
- [ ] Test cut/test run performed and performance confirmed before return
- [ ] Item cleaned of sharpening residue before packaging/hand-back
- [ ] Any pre-existing damage noted at intake is either addressed (if requested and possible) or clearly communicated as unresolved
