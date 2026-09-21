'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/site';
import { pad } from '@/lib/utils';
import { TLink } from '@/components/layout/Transition';
import { Sweep } from '@/components/motion/Sweep';
import { Reveal } from '@/components/motion/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

/**
 * Industries list with a fixed image panel beside it. Hovering (or focusing) a row
 * cross-fades the panel — no floating pop-ups. On phones each row shows its own photo.
 */
export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section className="sec bg-white text-ink">
      <div className="wrap mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-7">
        <div>
          <Eyebrow>Some Of The Industries We Serve</Eyebrow>
          <Sweep className="title-xl">
            Industries we <span className="accent">serve</span>
          </Sweep>
        </div>
        <p className="lead max-w-[380px] text-muted">ADK Offers The Suitable Services In Various Industries</p>
      </div>

      <div className="wrap grid items-start gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.15fr_1fr]">
        <ul className="border-t border-line">
          {industries.map((it, i) => (
            <Reveal as="li" key={it.name} delay={i * 0.05}>
              <TLink
                href="/application"
                onPointerEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-line py-[clamp(18px,2vw,26px)] md:grid-cols-[56px_1fr_auto]"
              >
                <span className={clsx('font-mono text-sm transition-colors duration-300', i === active ? 'text-brand' : 'text-muted-d')}>{pad(i + 1)}</span>
                <span
                  className={clsx(
                    'font-display-x text-[clamp(26px,3.4vw,52px)] leading-[1.05] font-bold tracking-[-0.03em] transition-[color,translate] duration-500 ease-expo',
                    i === active ? 'translate-x-2 text-ink' : 'text-ink/35 group-hover:text-ink',
                  )}
                >
                  {it.name}
                </span>
                <span className="relative size-14 overflow-hidden rounded-xl lg:hidden">
                  <Image src={it.img} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span
                  className={clsx(
                    'hidden size-12 place-items-center rounded-full transition-[background-color,color,rotate] duration-500 ease-expo lg:grid',
                    i === active ? 'rotate-45 bg-brand text-white' : 'text-ink/40 ring-1 ring-line',
                  )}
                >
                  <ArrowUpRight className="size-5" />
                </span>
              </TLink>
            </Reveal>
          ))}
        </ul>

        <Reveal className="relative hidden aspect-[4/5] overflow-hidden rounded-[28px] bg-paper ring-1 ring-line lg:sticky lg:top-[110px] lg:block">
          {/* absolute layer: next/image `fill` needs a relative/absolute parent, and the panel itself is sticky */}
          <div className="absolute inset-0">
            {industries.map((it, i) => (
              <Image
                key={it.img}
                src={it.img}
                alt={i === active ? it.name : ''}
                fill
                sizes="40vw"
                className={clsx('object-cover transition-[opacity,scale] duration-700 ease-expo', i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0')}
              />
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-md">
            <span className="font-display text-xl font-semibold tracking-[-0.02em]">{industries[active].name}</span>
            <span className="font-mono text-sm text-muted">
              {pad(active + 1)} / {pad(industries.length)}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
