import { cn } from "@/lib/utils";
import type { TitleParts } from "@/types/content";

interface AccentTitleProps extends TitleParts {
  as?: "h1" | "h2";
  className?: string;
}

/** Big display headline where the last words use the brand accent color. */
export function AccentTitle({
  plain,
  accent,
  as: Tag = "h2",
  className,
}: AccentTitleProps) {
  return (
    <Tag className={cn("text-section-title", className)}>
      {plain}
      {accent ? (
        <>
          {" "}
          <span className="text-primary">{accent}</span>
        </>
      ) : null}
    </Tag>
  );
}
