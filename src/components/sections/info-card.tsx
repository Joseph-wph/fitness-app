import { cn } from '@/lib/utils';

type Tone = 'primary' | 'secondary';

const toneClasses: Record<Tone, string> = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
};

interface InfoCardProps {
  title: string;
  body: string;
  /** Small heading above the body text (e.g. "Our vision"). */
  label?: string;
  tone?: Tone;
  /** Override the body width, e.g. "max-w-none" for wide cards. */
  bodyClassName?: string;
  /** Grid placement, borders and heights are passed from the parent. */
  className?: string;
}

/** Card with the title pinned to the top and the text pinned to the bottom. */
export function InfoCard({
  title,
  body,
  label,
  tone = 'secondary',
  bodyClassName = 'max-w-[34ch]',
  className,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between gap-8 p-5 md:p-6',
        toneClasses[tone],
        className
      )}
    >
      <h2 className='text-info-title'>{title}</h2>
      <div className='flex flex-col gap-2'>
        {label ? <h3 className='text-item-title'>{label}</h3> : null}
        <p className={cn('text-body', bodyClassName)}>{body}</p>
      </div>
    </div>
  );
}
