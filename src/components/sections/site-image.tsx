import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types/content";

interface SiteImageProps {
  asset: ImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Apply black-and-white filter (used for the community photo). */
  grayscale?: boolean;
}

/** Fills its parent (which must be `relative` with a defined size). */
export function SiteImage({
  asset,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 66vw, 100vw",
  grayscale = false,
}: SiteImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", grayscale && "grayscale", className)}
    />
  );
}
