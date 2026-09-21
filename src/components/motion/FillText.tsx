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
      gsap.fromTo(
        split.words,
        { color: '#cfcfd4' },
        { color: '#111114', stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 55%', scrub: true } },
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
