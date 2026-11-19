import { Community } from '@/components/sections/community';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { JoinCta } from '@/components/sections/join-cta';
import { PageTitle } from '@/components/sections/page-title';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <>
      <PageTitle title={siteConfig.hero.title} />
      <FeatureGrid />
      <Community />
      <JoinCta />
    </>
  );
}
