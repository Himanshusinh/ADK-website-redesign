'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { industries } from '@/data/site';
import { TLink } from '@/components/layout/Transition';
import { Sweep } from '@/components/motion/Sweep';
import { Reveal } from '@/components/motion/Reveal';

/**
 * Industries: the list on the left, a deck of photo cards on the right. Moving down the list
 * slides the next card to the front and pushes the others back.
 */
export function Industries() {
  const [active, setActive] = useState(0);
  const pick = (i: number) => setActive(i);

  return (
    <section className="theme-dark sec text-ink">
      <div className="wrap mb-[clamp(28px,4vw,52px)] flex flex-wrap items-end justify-between gap-6">
        <Sweep className="title-xl">
          Industries we <span className="accent">serve</span>
        </Sweep>
        <p className="lead max-w-[380px] text-muted">ADK offers the suitable services in various industries.</p>
      </div>

      <div className="wrap grid items-center gap-[clamp(32px,5vw,80px)] lg:grid-cols-[1.05fr_.95fr]">
        <ul className="border-t border-line">
          {industries.map((it, i) => (
            <Reveal as="li" key={it.name} delay={i * 0.05}>
              <TLink
                href="/application"
                onPointerEnter={() => pick(i)}
                onFocus={() => pick(i)}
                className="group flex items-center gap-4 border-b border-line py-[clamp(15px,1.7vw,24px)]"
              >
                <span
                  className={clsx(
                    'font-display-x text-[clamp(21px,2.3vw,36px)] leading-[1.08] font-semibold tracking-[-0.014em] transition-[color,translate] duration-500 ease-expo',
                    i === active ? 'translate-x-2 text-ink' : 'text-ink/35 group-hover:text-ink',
                  )}
                >
                  {it.name}
                </span>
                <span
                  className={clsx(
                    'ml-auto grid size-10 shrink-0 place-items-center rounded-full transition-[background-color,color,rotate] duration-500 ease-expo',
                    i === active ? 'rotate-45 bg-brand text-white' : 'text-ink/40 ring-1 ring-line',
                  )}
                >
                  <ArrowUpRight className="size-4" />
                </span>
              </TLink>
            </Reveal>
          ))}
        </ul>

        {/* the reel — hovering a name slides the column, the neighbours peek above and below */}
        <Reveal
          className="relative mx-auto hidden overflow-hidden lg:block [mask-image:linear-gradient(to_bottom,transparent,#000_9%,#000_91%,transparent)]"
          style={{
            ['--card' as string]: 'clamp(430px,68vh,680px)',
            ['--gap' as string]: '14px',
            width: 'calc(var(--card) * 941 / 1672)',
            height: 'calc(var(--card) * 1.2)',
          }}
        >
          <div
            className="absolute inset-x-0 top-0 flex flex-col gap-[var(--gap)] will-change-transform"
            style={{
              transform: `translateY(calc((var(--card) * 0.2) / 2 - ${active} * (var(--card) + var(--gap))))`,
              transition: 'transform 780ms cubic-bezier(.22,.9,.24,1)',
            }}
          >
            {industries.map((it, i) => (
              <TLink
                key={it.name}
                href="/application"
                tabIndex={i === active ? 0 : -1}
                className={clsx(
                  'relative block shrink-0 overflow-hidden rounded-[22px] transition-[opacity,transform,filter] duration-[600ms] ease-expo',
                  i === active ? 'scale-100 opacity-100' : 'scale-[0.93] opacity-35 blur-[1.5px]',
                )}
                style={{ height: 'var(--card)' }}
              >
                <Image src={it.img} alt={it.name} fill sizes="(min-width:1024px) 26vw, 60vw" className="object-cover" />
                <span aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(11,11,13,.9)_100%)]" />
                <span
                  className={clsx(
                    'font-display-x absolute inset-x-5 bottom-5 text-[clamp(16px,1.4vw,21px)] leading-tight font-semibold text-white transition-opacity duration-500',
                    i === active ? 'opacity-100' : 'opacity-0',
                  )}
                >
                  {it.name}
                </span>
              </TLink>
            ))}
          </div>
        </Reveal>

        {/* phones: the full portraits, two per row */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {industries.map((it) => (
            <TLink key={it.name} href="/application" className="relative block aspect-[941/1672] overflow-hidden rounded-[18px]">
              <Image src={it.img} alt={it.name} fill sizes="50vw" className="object-cover" />
              <span aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,11,13,.9)_100%)]" />
              <span className="font-display absolute inset-x-3 bottom-3 text-[15px] leading-tight font-semibold">{it.name}</span>
            </TLink>
          ))}
        </div>
      </div>
    </section>
  );
}
