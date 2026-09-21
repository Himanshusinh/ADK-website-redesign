import type { ReactNode } from 'react';

/**
 * Top of an inner page: clears the fixed header and paints the soft gradient.
 * No banner image and no big page title — the page opens straight on its content.
 */
export function PageStart({ children }: { children: ReactNode }) {
  return (
    <div className="bg-soft pt-[var(--hdr)] [&>section]:bg-transparent [&>section:first-child]:pt-[clamp(40px,5vw,72px)]">{children}</div>
  );
}
