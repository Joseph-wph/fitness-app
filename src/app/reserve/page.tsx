import type { Metadata } from 'next';

import { JoinCta } from '@/components/sections/join-cta';
import { PageTitle } from '@/components/sections/page-title';
import { SessionGrid } from '@/components/sections/session-grid';
import { siteConfig } from '@/config/site';

const { title, personal } = siteConfig.reserve;

export const metadata: Metadata = {
  title: `${title.plain} ${title.accent}`,
};

export default function ReservePage() {
  return (
    <>
      <PageTitle title={title} />
      <SessionGrid />
      <JoinCta
        content={personal}
        titleClassName='text-[2.375rem] max-w-[10ch] md:max-w-[16ch] md:text-[3.5rem] lg:max-w-none'
      />
    </>
  );
}
