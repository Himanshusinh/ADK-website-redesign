'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, SplitText, useGSAP, reducedMotion } from './gsap';

/** Paragraph whose words change from grey to ink one by one as you scroll through it. */
export function FillText({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.set(el, { visibility: 'visible' });
      if (reducedMotion()) return;
      const split = SplitText.create(el, { type: 'words' });
      // colours come from the section's theme (light: grey→ink, .theme-dark: charcoal→white)
      const css = getComputedStyle(el);
      const off = css.getPropertyValue('--fill-off').trim() || '#cfcfd4';
      const on = css.getPropertyValue('--color-ink').trim() || '#111114';
      gsap.fromTo(
        split.words,
        { color: off },
        { color: on, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: true } },
      );
    },
    { scope: ref },
  );
  return (
    <p ref={ref} data-split="" className={className}>
      {children}
    </p>
  );
}
