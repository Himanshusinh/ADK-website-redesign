'use client';

import { useRef } from 'react';
import { gsap, useGSAP, reducedMotion } from './gsap';

/** Number that counts up from 0 when it scrolls into view. */
export function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const o = { v: 0 };
    el.textContent = (0).toFixed(decimals);
    gsap.to(o, {
      v: value,
      duration: 2.2,
      ease: 'power3.out',
      onUpdate: () => {
        el.textContent = o.v.toFixed(decimals);
      },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    });
  });
  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
