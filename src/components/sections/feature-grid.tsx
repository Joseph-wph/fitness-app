import Link from 'next/link';

import { InfoCard } from '@/components/sections/info-card';
import { SiteImage } from '@/components/sections/site-image';
import { Button } from '@/components/ui/button';
import { assets } from '@/config/assets';
import { siteConfig } from '@/config/site';

/**
 * Two-row editorial grid (Figma: mobile 375 · tablet 800 · desktop 1280).
 *  - mobile : single column (image / text / image / text / text)
 *  - md+    : 3 columns, row 1 = image (2 cols) + "committed" card,
 *             row 2 = two text cards + image.
 *             Row height: 300px on tablet, 480px on desktop.
 */
const rowHeight = 'md:min-h-[18.75rem] lg:min-h-[30rem]';

export function FeatureGrid() {
  const { committed, highlights } = siteConfig;
  const [guided, dynamic] = highlights;

  return (
    <section className='grid grid-cols-1 border-b border-border md:grid-cols-3'>
      {/* Hero photo */}
      <div
        className={`relative order-1 aspect-5/3 md:col-span-2 md:col-start-1 md:row-start-1 md:aspect-auto ${rowHeight}`}
      >
        <SiteImage asset={assets.heroTraining} priority />
      </div>

      {/* For the committed */}
      <div
        className={`order-2 flex flex-col justify-between gap-8 bg-secondary p-5 md:col-start-3 md:row-start-1 md:border-l md:p-6 ${rowHeight}`}
      >
        <h2 className='text-card-title'>{committed.title}</h2>
        <div className='flex flex-col gap-6'>
          <p className='text-body max-w-[32ch]'>{committed.body}</p>
          <Button asChild variant='ghost' className='self-start px-0 md:px-4'>
            <Link href={committed.cta.href}>{committed.cta.label}</Link>
          </Button>
        </div>
      </div>

      {/* Open gym photo */}
      <div
        className={`relative order-3 aspect-375/480 border-t border-border md:order-0 md:col-start-3 md:row-start-2 md:aspect-auto md:border-t-0 ${rowHeight}`}
      >
        <SiteImage
          asset={assets.openGym}
          sizes='(min-width: 768px) 33vw, 100vw'
        />
      </div>

      {/* Guided by experts */}
      <InfoCard
        {...guided}
        className={`order-4 border-t border-border md:col-start-1 md:row-start-2 md:border-r ${rowHeight}`}
      />

      {/* Dynamic open gym */}
      <InfoCard
        {...dynamic}
        className={`order-5 border-t border-border md:col-start-2 md:row-start-2 ${rowHeight}`}
      />
    </section>
  );
}
