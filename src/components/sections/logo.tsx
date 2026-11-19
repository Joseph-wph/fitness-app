import Image from "next/image";
import Link from "next/link";

import { assets } from "@/config/assets";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "header" = small inline lockup, "footer" = large mark. */
  variant?: "header" | "footer";
  className?: string;
}

export function Logo({ variant = "header", className }: LogoProps) {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("flex items-center gap-2", className)}
    >
      <Image
        src={assets.logoMark.src}
        alt=""
        width={assets.logoMark.width}
        height={assets.logoMark.height}
        className={isHeader ? "h-6 w-auto" : "h-24 w-auto md:h-28 lg:h-32"}
        priority={isHeader}
      />
      {isHeader ? (
        <span className="font-heading text-lg font-bold tracking-tighter">
          {siteConfig.name}
        </span>
      ) : null}
    </Link>
  );
}
