'use client';

import { useEffect } from 'react';

/** Gives [data-spot] cards their pointer position (--x/--y) for the soft spotlight gradient. */
export function Effects() {
  useEffect(() => {
    const spot = (e: PointerEvent) => {
      const c = (e.target as Element | null)?.closest?.('[data-spot]') as HTMLElement | null;
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--x', `${e.clientX - r.left}px`);
      c.style.setProperty('--y', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', spot, { passive: true });
    return () => document.removeEventListener('pointermove', spot);
  }, []);
  return null;
}
