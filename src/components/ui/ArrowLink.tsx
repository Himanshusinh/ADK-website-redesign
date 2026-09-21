import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { TLink } from '@/components/layout/Transition';

const line =
  'absolute inset-x-0 bottom-0 h-[1.5px] bg-current transition-transform duration-500 ease-expo';

/** Text link with an underline that extends and an arrow that nudges on hover. */
export function ArrowLink({ href, children, light, className }: { href: string; children: ReactNode; light?: boolean; className?: string }) {
  return (
    <TLink href={href} className={clsx('group/al relative inline-flex items-center gap-2.5 pb-1 text-[15px] font-semibold', light && 'text-white', className)}>
      {children}
      <ArrowRight className={clsx('size-4 transition-transform duration-500 ease-expo group-hover/al:translate-x-1.5', light ? 'text-white' : 'text-brand')} />
      <span className={clsx(line, 'origin-right scale-x-[.35] group-hover/al:origin-left group-hover/al:scale-x-100')} />
    </TLink>
  );
}

/** Same look, but not a link — reacts to the hover of the nearest `group` (a whole card). */
export function ArrowLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx('relative inline-flex items-center gap-2.5 pb-1 text-[15px] font-semibold', className)}>
      {children}
      <ArrowRight className="size-4 text-brand transition-transform duration-500 ease-expo group-hover:translate-x-1.5" />
      <span className={clsx(line, 'origin-right scale-x-[.35] group-hover:origin-left group-hover:scale-x-100')} />
    </span>
  );
}
