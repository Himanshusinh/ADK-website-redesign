'use client';

import clsx from 'clsx';
import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP, reducedMotion } from './gsap';

type Props = {
  head: ReactNode;
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  dark?: boolean;
};

/**
 * Desktop: the section pins and its track slides sideways as you scroll.
 * Mobile: a native swipeable row. Children marked `data-hs-item` get `data-on`
 * toggled as the scroll passes them (used by the timeline).
 */
export function HScroll({ head, children, className, trackClassName, dark }: Props) {
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (reducedMotion()) return;
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px)', () => {
        const s = sec.current!;
        const t = track.current!;
        const items = t.querySelectorAll<HTMLElement>('[data-hs-item]');
        const dist = () => Math.max(0, t.scrollWidth - s.clientWidth);
        gsap.to(t, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: {
            trigger: s,
            start: 'top top',
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
              if (items.length) {
                const n = Math.round(self.progress * (items.length - 1));
                items.forEach((it, i) => it.setAttribute('data-on', String(i <= n)));
              }
            },
          },
        });
      });
      return () => mm.revert();
    },
    { scope: sec },
  );

  return (
    <div>
      <section ref={sec} className={clsx('relative overflow-hidden py-[clamp(80px,9vw,130px)]', className)}>
        {head}
        <div className="no-scrollbar max-[899px]:snap-x max-[899px]:snap-mandatory max-[899px]:overflow-x-auto">
          <div ref={track} className={clsx('flex w-max gap-[clamp(16px,1.8vw,28px)] px-[clamp(18px,4vw,64px)] will-change-transform', trackClassName)}>
            {children}
          </div>
        </div>
        <div className="wrap mt-10 hidden min-[900px]:block">
          <div className={clsx('h-0.5', dark ? 'bg-line-d' : 'bg-line')}>
            <span ref={bar} className="block h-full origin-left bg-brand" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
