import type { StaticImageData } from "next/image";

/** Ukuran tampil dengan luas yang sama untuk setiap logo, tinggi dibatasi maxHeight. */
export function logoSize(img: StaticImageData, area: number, maxHeight: number) {
  const ratio = img.width / img.height;
  const height = Math.min(Math.sqrt(area / ratio), maxHeight);
  return { width: Math.round(height * ratio), height: Math.round(height) };
}
