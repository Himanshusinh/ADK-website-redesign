'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP, reducedMotion } from './gsap';

type Props = {
  children: ReactNode;
  className?: string;
  /** travel in % of own height, each direction */
  amount?: number;
  /** optional zoom-out while scrolling: [from, to] */
  scale?: [number, number];
  start?: string;
  end?: string;
};

/** Moves its content slower than the page (depth effect). Trigger = parent element. */
export function Parallax({ children, className, amount = 7, scale, start = 'top bottom', end = 'bottom top' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    gsap.fromTo(
      el,
      { yPercent: -amount, ...(scale ? { scale: scale[0] } : {}) },
      { yPercent: amount, ...(scale ? { scale: scale[1] } : {}), ease: 'none', scrollTrigger: { trigger: el.parentElement, start, end, scrub: true } },
    );
  });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
