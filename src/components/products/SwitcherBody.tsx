'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import type { Node } from '@/data/site';
import { reducedMotion } from '@/components/motion/gsap';

/** Auto-playing tab strip: the bar fills, then the next tab takes over. Hovering pauses it. */
export function SwitcherBody({ items, name }: { items: NonNullable<Node['switcher']>; name: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = () => !reducedMotion() && setI((k) => (k + 1) % items.length);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[1200/650] overflow-hidden rounded-[24px] bg-[#0b0b0d] max-md:aspect-[4/3]">
        {items.map((it, k) => (
          <Image
            key={it.img}
            src={it.img}
            alt={`${name} — ${it.title}`}
            fill
            unoptimized={it.img.includes('.anim.')} /* animated frames must not be re-encoded */
            sizes="(min-width:1480px) 1352px, 100vw"
            className={clsx('object-cover transition-[opacity,transform] duration-[1200ms] ease-expo', k === i ? 'scale-100 opacity-100' : 'scale-[1.05] opacity-0')}
          />
        ))}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/45 to-transparent" />
        <div key={i} className="animate-rise absolute inset-x-0 bottom-0 p-[clamp(18px,2.4vw,34px)]">
          <h3 className="font-display-x text-[clamp(19px,1.9vw,28px)] leading-tight font-semibold tracking-[-0.014em]">{items[i].title}</h3>
          <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-white/70">{items[i].text}</p>
        </div>
      </div>

      <div role="tablist" aria-label="Features" className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, k) => (
          <button
            key={it.title}
            type="button"
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            onMouseEnter={() => setI(k)}
            className="group text-left"
          >
            <span className="relative block h-0.5 overflow-hidden rounded-full bg-white/15">
              {k === i ? (
                <span
                  key={`${i}-bar`}
                  onAnimationEnd={next}
                  className={clsx('animate-bar absolute inset-0 origin-left bg-brand', paused && '[animation-play-state:paused]')}
                />
              ) : (
                <span className="absolute inset-0 origin-left scale-x-0 bg-white/40 transition-transform duration-500 group-hover:scale-x-100" />
              )}
            </span>
            <span className={clsx('mt-3 block text-[14px] font-semibold transition-colors', k === i ? 'text-ink' : 'text-muted group-hover:text-ink')}>{it.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
