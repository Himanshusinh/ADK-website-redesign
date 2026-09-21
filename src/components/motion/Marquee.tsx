'use client';

import clsx from 'clsx';
import { useEffect, useRef, type ReactNode } from 'react';
import { gsap, lenisRef, reducedMotion } from './gsap';

type Props = {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  gap?: number;
  className?: string;
};

/** Infinite horizontal loop that speeds up with scroll velocity. */
export function Marquee({ children, speed = 1, reverse = false, pauseOnHover = false, gap = 16, className }: Props) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el || reducedMotion()) return;
    const dir = reverse ? 1 : -1;
    let x = 0;
    let hover = false;
    const on = () => (hover = true);
    const off = () => (hover = false);
    if (pauseOnHover) {
      el.addEventListener('pointerenter', on);
      el.addEventListener('pointerleave', off);
    }
    const tick = () => {
      if (hover) return;
      const v = Math.min(Math.abs(lenisRef.current?.velocity ?? 0), 60);
      const half = el.scrollWidth / 2;
      x += dir * (speed * 0.7 + v * 0.12);
      if (x <= -half) x += half;
      if (x > 0) x -= half;
      el.style.transform = `translate3d(${x}px,0,0)`;
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      el.removeEventListener('pointerenter', on);
      el.removeEventListener('pointerleave', off);
    };
  }, [speed, reverse, pauseOnHover]);

  const group = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" style={{ gap, paddingRight: gap }} aria-hidden={hidden || undefined}>
      {children}
    </div>
  );

  return (
    <div className={clsx('overflow-hidden', className)}>
      <div ref={track} className="flex w-max will-change-transform">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
