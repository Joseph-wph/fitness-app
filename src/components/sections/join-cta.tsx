import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import type { JoinContent } from '@/types/content';

/**
 * "primary"   = periwinkle band + light button (home, reserve)
 * "secondary" = lavender band + periwinkle button (about)
 */
const tones = {
  primary: { section: 'bg-primary', button: 'light' },
  secondary: { section: 'bg-secondary', button: 'primary' },
} as const;

interface JoinCtaProps {
  /** Defaults to the shared "Join the Primal tribe" copy. */
  content?: JoinContent;
  tone?: keyof typeof tones;
  /** Extra classes for the title, e.g. to change its max width. */
  titleClassName?: string;
}

export function JoinCta({
  content = siteConfig.join,
  tone = 'primary',
  titleClassName,
}: JoinCtaProps) {
  const { eyebrow, title, body, cta } = content;
  const style = tones[tone];

  return (
    <section
      className={cn(
        'flex min-h-107 flex-col items-center justify-center gap-5 border-t border-border px-5 py-16 text-center md:min-h-120',
        style.section
      )}
    >
      {eyebrow ? <p className='text-label'>{eyebrow}</p> : null}
      <h2
        className={cn(
          'text-card-title max-w-[18ch] text-balance md:max-w-none text-[57px]',
          titleClassName
        )}
      >
        {title}
      </h2>
      {body ? <p className='text-lead max-w-160 lg:max-w-3xl'>{body}</p> : null}
      <Button asChild variant={style.button}>
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </section>
  );
}
