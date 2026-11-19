import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { SessionInfo } from '@/types/content';

interface SessionCardProps extends SessionInfo {
  className?: string;
}

/**
 * One bookable session: title, time slots (each underlined), description
 * and a full-width reserve button. Equal heights come from the parent grid.
 */
export function SessionCard({
  title,
  schedule,
  body,
  cta,
  className,
}: SessionCardProps) {
  return (
    <article
      className={cn(
        'flex min-h-104 flex-col bg-secondary p-5 md:min-h-120 md:justify-between lg:p-7.5',
        className
      )}
    >
      <h2 className='text-info-title'>{title}</h2>

      <div className='mt-auto flex flex-col md:mt-0 md:py-6'>
        <ul>
          {schedule.map((slot) => (
            <li key={slot} className='text-lead border-b border-border py-4'>
              {slot}
            </li>
          ))}
        </ul>
        <p className='text-lead pt-5'>{body}</p>
      </div>

      <Button asChild className='mt-7 w-full md:mt-0'>
        <Link href={cta.href}>{cta.label}</Link>
      </Button>
    </article>
  );
}
