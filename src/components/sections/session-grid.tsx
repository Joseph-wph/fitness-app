import { SessionCard } from '@/components/sections/session-card';
import { siteConfig } from '@/config/site';

/**
 * Session cards.
 *  - mobile : stacked, separated by horizontal lines
 *  - md+    : 3 equal columns separated by vertical lines (480px tall)
 */
export function SessionGrid() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3'>
      {siteConfig.reserve.sessions.map((session) => (
        <SessionCard
          key={session.title}
          {...session}
          className='border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0'
        />
      ))}
    </section>
  );
}
