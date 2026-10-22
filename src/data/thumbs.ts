// Path to the small WebP copy made by scripts/make-thumbs.mjs.
//   thumb('/images/stories/foo.jpg', 480) -> '/images/thumbs/stories/foo-480.webp'
export const THUMB_WIDTHS = [480, 960] as const;

export function thumb(src: string, width: (typeof THUMB_WIDTHS)[number]): string {
  return src.replace(/^\/images\//, '/images/thumbs/').replace(/\.[^.\/]+$/, `-${width}.webp`);
}

export function thumbSrcset(src: string): string {
  return THUMB_WIDTHS.map((w) => `${thumb(src, w)} ${w}w`).join(', ');
}
