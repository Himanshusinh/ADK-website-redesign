'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { company, lineup } from '@/data/site';
import { TLink } from '@/components/layout/Transition';
import { QuoteButton } from '@/components/layout/UI';
import { Button } from '@/components/ui/Button';
import { reducedMotion } from '@/components/motion/gsap';

const trust = [
  ['16+', 'Years of experience'],
  ['750+', 'Happy customers'],
  ['820+', 'Machines installed'],
  ['PAN India', `Service · ${company.branches.length} branches`],
];

function Verb({ on, children }: { on: boolean; children: ReactNode }) {
  return (
    <span className={clsx('relative inline-block transition-colors duration-500', on ? 'text-brand' : 'text-ink')}>
      {children}
      <span
        aria-hidden
        className={clsx(
          'absolute inset-x-0 bottom-[0.02em] h-[0.07em] origin-left rounded-full bg-brand transition-transform duration-700 ease-expo',
          on ? 'scale-x-100' : 'scale-x-0',
        )}
      />
    </span>
  );
}

/** Landing hero: one clear sentence about what ADK does, then a shelf of the machines it sells. */
export function HeroShelf() {
  const [verb, setVerb] = useState(0);
  useEffect(() => {
    if (reducedMotion()) return;
    const id = setInterval(() => setVerb((v) => (v + 1) % 3), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-soft relative overflow-hidden pt-[calc(var(--hdr)+clamp(28px,5vh,56px))] text-ink">

      <div className="wrap relative text-center">
        <p className="animate-rise mb-6 inline-flex items-center gap-2.5 font-mono text-[13px] tracking-[0.14em] text-muted uppercase">
          <span className="size-2 rotate-45 rounded-[2px] bg-brand max-sm:hidden" />
          ADK Engineering &amp; Solutions · Ahmedabad · Since 2015
        </p>
        <h1
          className="animate-rise font-display-x mx-auto max-w-[15ch] text-[clamp(44px,6.6vw,112px)] leading-[0.98] font-extrabold tracking-[-0.045em]"
          style={{ animationDelay: '0.08s' }}
        >
          Machines that <Verb on={verb === 0}>cut</Verb>, <Verb on={verb === 1}>bend</Verb> &amp; <Verb on={verb === 2}>weld</Verb> metal.
        </h1>
        <p className="animate-rise lead mx-auto mt-6 max-w-[660px] text-muted" style={{ animationDelay: '0.16s' }}>
          CNC fiber laser cutting, plasma cutting, press brakes, laser welding and PEB machinery — supplied, installed and serviced across India.
        </p>
        <div className="animate-rise mt-8 flex flex-wrap justify-center gap-3" style={{ animationDelay: '0.24s' }}>
          <Button href="/products" label="Explore Machines" />
          <QuoteButton label="Get a Free Quote" variant="outline" />
        </div>
      </div>

      {/* the shelf */}
      <ul className="wrap relative mt-[clamp(40px,7vh,80px)] grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-6 md:gap-x-6">
        {lineup.map((m, k) => (
          <li key={m.name} className="animate-rise" style={{ animationDelay: `${0.35 + k * 0.07}s` }}>
            <TLink href={m.href} className="group block text-center">
              <span className="relative block aspect-[4/3]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  preload={k < 3}
                  sizes="(min-width:768px) 16vw, 33vw"
                  className="object-contain mix-blend-multiply transition-transform duration-500 ease-expo group-hover:-translate-y-2 group-hover:scale-[1.04]"
                />
              </span>
              <span className="mt-3 block h-px bg-line transition-colors duration-300 group-hover:bg-brand" />
              <span className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold md:text-base">
                {m.name}
                <ArrowUpRight className="size-4 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </TLink>
          </li>
        ))}
      </ul>

      <dl className="wrap relative mt-12 grid grid-cols-2 gap-y-5 border-t border-line py-7 md:grid-cols-4">
        {trust.map(([n, label]) => (
          <div key={label} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <dt className="font-display-x text-[clamp(22px,2vw,30px)] font-bold tracking-[-0.03em] whitespace-nowrap">{n}</dt>
            <dd className="text-[15px] text-muted">{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
