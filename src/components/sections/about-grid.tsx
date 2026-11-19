import { InfoCard } from '@/components/sections/info-card';
import { SiteImage } from '@/components/sections/site-image';
import { assets } from '@/config/assets';
import { siteConfig } from '@/config/site';

/**
 * About page grid (Figma: mobile 375 · tablet 800 · desktop 1280).
 *  - mobile : single column (photo / vision / photo / card / banner)
 *  - md     : 2 columns (1/2 + 1/2), rows 376px
 *  - lg+    : 3 columns (2/3 + 1/3), rows 480px
 * Mobile order is set with `max-md:order-*`; md+ uses explicit placement.
 */
const rowHeight = 'md:min-h-[23.5rem] lg:min-h-[30rem]';
const halfOrThird = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';
const halfOrTwoThirds =
  '(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw';

export function AboutGrid() {
  const { vision, openGym, statement } = siteConfig.about;

  return (
    <section className='grid grid-cols-1 border-b border-border md:grid-cols-2 lg:grid-cols-3'>
      {/* Vision (periwinkle card) */}
      <InfoCard
        tone='primary'
        title={vision.title}
        label={vision.label}
        body={vision.body}
        bodyClassName='max-w-none'
        className={`max-md:order-2 md:col-start-1 md:row-start-1 lg:col-span-2 ${rowHeight}`}
      />

      {/* Team photo */}
      <div
        className={`relative aspect-5/3 max-md:order-1 md:col-start-2 md:row-start-1 md:aspect-auto lg:col-start-3 ${rowHeight}`}
      >
        <SiteImage asset={assets.aboutTeam} sizes={halfOrThird} />
      </div>

      {/* Deadlift photo */}
      <div
        className={`relative aspect-5/3 max-md:order-3 md:col-start-1 md:row-start-2 md:aspect-auto lg:col-span-2 ${rowHeight}`}
      >
        <SiteImage asset={assets.aboutDeadlift} sizes={halfOrTwoThirds} />
      </div>

      {/* Dynamic open gym card */}
      <InfoCard
        title={openGym.title}
        body={openGym.body}
        className={`max-md:order-4 md:col-start-2 md:row-start-2 lg:col-start-3 ${rowHeight}`}
      />

      {/* Full-width banner with overlaid statement */}
      <div
        className={`relative flex aspect-375/480 items-end max-md:order-5 md:col-span-2 md:col-start-1 md:row-start-3 md:aspect-auto lg:col-span-3 ${rowHeight}`}
      >
        <SiteImage asset={assets.aboutSpace} sizes='100vw' />
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent'
        />
        <h2 className='text-info-title relative p-5 text-white md:max-w-136 md:p-6 lg:max-w-184'>
          {statement}
        </h2>
      </div>
    </section>
  );
}
