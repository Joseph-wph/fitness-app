import Link from "next/link";

import { AccentTitle } from "@/components/sections/accent-title";
import { SiteImage } from "@/components/sections/site-image";
import { Button } from "@/components/ui/button";
import { assets } from "@/config/assets";
import { siteConfig } from "@/config/site";

/**
 * Title bar + 2-pane block.
 *  - mobile : photo first, then the list
 *  - md     : list (1/2) | photo (1/2)
 *  - lg+    : list (1/3) | photo (2/3)
 */
export function Community() {
  const { title, heading, features, cta } = siteConfig.community;

  return (
    <section id="classes" aria-labelledby="community-title">
      <div className="border-b border-border bg-background px-5 py-3 md:px-6 md:py-4">
        <AccentTitle {...title} className="text-section-title" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Photo */}
        <div className="relative aspect-[5/3] md:col-start-2 md:row-start-1 md:aspect-auto lg:col-span-2 lg:col-start-2 lg:min-h-[37.5rem]">
          <SiteImage
            asset={assets.community}
            grayscale
            sizes="(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>

        {/* List */}
        <div className="flex flex-col bg-secondary md:col-start-1 md:row-start-1 lg:col-span-1">
          <h3
            id="community-title"
            className="text-card-title border-b border-border p-5 md:p-6"
          >
            {heading}
          </h3>

          <ul className="flex flex-col">
            {features.map((feature) => (
              <li
                key={feature.title}
                className="flex flex-col gap-1 border-b border-border p-5 md:px-6"
              >
                <h4 className="text-item-title">{feature.title}</h4>
                <p className="text-body">{feature.body}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-1 items-center justify-center p-5 md:justify-start md:px-6 md:py-8">
            <Button asChild variant="ghost" className="px-0 md:px-4">
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
