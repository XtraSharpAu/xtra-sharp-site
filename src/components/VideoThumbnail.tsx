"use client";

import { useState } from "react";

type VideoThumbnailProps = {
  /** Thumbnail image URL (local /public path or YouTube thumbnail URL). */
  thumbnailSrc: string;
  /** YouTube video ID, e.g. "vSB9MhXxX6Y". */
  videoId: string;
  /** Describes the video; used for the thumbnail alt text and play-button label. */
  altText: string;
  /** Optional iframe title once playing (defaults to altText). */
  title?: string;
};

/**
 * Click-to-play YouTube embed. Shows a static thumbnail with a play icon and
 * only creates the YouTube iframe after the visitor clicks, so nothing from
 * YouTube's player (scripts, fonts, preconnects) loads with the page.
 */
export default function VideoThumbnail({
  thumbnailSrc,
  videoId,
  altText,
  title,
}: VideoThumbnailProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-md">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title ?? altText}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${altText}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-ctaRed/70"
        >
          {/* Plain <img>: a small external thumbnail, lazy-loaded. next/image
              would need remotePatterns config and adds little here. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnailSrc}
            alt={altText}
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ctaRed shadow-lg transition-transform group-hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

