export default function wsrvLoader({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }) {
    const params = [`&width=${width}`, `q=${quality || 75}`, "af", "il"];
    return `https://i.lonelil.com/?url=${src}${params.join("&")}`;
  }