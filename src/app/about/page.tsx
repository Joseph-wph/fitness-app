import type { Metadata } from 'next';

import { AboutGrid } from '@/components/sections/about-grid';
import { JoinCta } from '@/components/sections/join-cta';
import { PageTitle } from '@/components/sections/page-title';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.about.title.plain,
};

export default function AboutPage() {
  return (
    <>
      <PageTitle title={siteConfig.about.title} />
      <AboutGrid />
      <JoinCta tone='secondary' />
    </>
  );
}
