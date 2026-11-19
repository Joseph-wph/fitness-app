import { AccentTitle } from '@/components/sections/accent-title';
import type { TitleParts } from '@/types/content';

interface PageTitleProps {
  title: TitleParts;
}

/** Big white title bar at the top of every page (renders the page's <h1>). */
export function PageTitle({ title }: PageTitleProps) {
  return (
    <section className='flex items-center border-b border-border bg-background px-5 py-5 md:min-h-29.5 md:px-6 md:py-3 lg:min-h-42'>
      <AccentTitle as='h1' {...title} className='text-display' />
    </section>
  );
}
