import clsx from 'clsx';
import type { ReactNode } from 'react';

/** Small mono label with a glowing red diamond, used above headings. */
export function Eyebrow({ children, light, className }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={clsx(
        'inline-flex items-center gap-2.5 font-mono text-xs leading-none tracking-[0.14em] uppercase',
        light ? 'text-muted-d' : 'text-muted',
        className ?? 'mb-[22px]',
      )}
    >
      <span className="size-2 rotate-45 rounded-[2px] bg-brand shadow-[0_0_12px_var(--color-brand)]" />
      {children}
    </p>
  );
}
