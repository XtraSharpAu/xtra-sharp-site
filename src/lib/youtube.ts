/** Standard YouTube thumbnail URL (480×360, available for every video). */
export function youTubeThumb(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
