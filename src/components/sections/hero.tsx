import { AccentTitle } from '@/components/sections/accent-title';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className='flex min-h-25 items-center border-b border-border bg-background px-5 py-3 md:min-h-29.5 md:px-6 lg:min-h-42'>
      <AccentTitle
        as='h1'
        {...siteConfig.hero.title}
        className='text-display'
      />
    </section>
  );
}
