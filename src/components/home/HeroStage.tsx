'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { company, heroSlides } from '@/data/site';
import { TLink } from '@/components/layout/Transition';
import { QuoteButton } from '@/components/layout/UI';
import { Button } from '@/components/ui/Button';
import { reducedMotion } from '@/components/motion/gsap';

const trust = [
  ['16+', 'Years of experience'],
  ['750+', 'Happy customers'],
  ['850+', 'Machines installed'],
  [`${company.branches.length}`, 'Service branches'],
];

function Verb({ on, children }: { on: boolean; children: ReactNode }) {
  return (
    <span className={clsx('relative inline-block transition-colors duration-500', on ? 'text-brand' : 'text-white')}>
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

/**
 * Landing hero on black (the logo's own colours): the one-line promise on the left, a cinematic
 * machine stage on the right that cycles through the product lines. The red verb follows the slide.
 */
export function HeroStage() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[i];
  const next = () => !reducedMotion() && setI((k) => (k + 1) % heroSlides.length);

  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0b0b0d] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* stage */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        {heroSlides.map((s, k) => (
          <div
            key={s.img}
            className={clsx('absolute inset-0 transition-opacity duration-[1400ms] ease-io', k === i ? 'opacity-100' : 'opacity-0')}
          >
            {s.video ? (
              <video src={s.video} poster={s.img} autoPlay muted loop playsInline className="size-full object-cover" style={{ objectPosition: s.pos }} />
            ) : s.fit === 'frame' ? (
              <div className="absolute inset-x-[2%] top-[12%] bottom-[20%] flex items-center max-lg:top-[34%] lg:left-[38%]">
                <div
                  className={clsx(
                    'relative w-full [mask-image:radial-gradient(ellipse_at_center,#000_52%,transparent_76%)] transition-transform duration-[7000ms] ease-out',
                    k === i ? 'scale-100' : 'scale-[1.06]',
                  )}
                  style={{ aspectRatio: s.ratio }}
                >
                  <Image src={s.img} alt="" fill sizes="(min-width:1024px) 66vw, 100vw" className="object-cover" />
                </div>
              </div>
            ) : (
              <div className={clsx('absolute', s.fit === 'contain' ? 'inset-x-[3%] top-[11%] bottom-[15%] max-lg:top-[30%] lg:left-[36%]' : 'inset-0')}>
                <Image
                  src={s.img}
                  alt=""
                  fill
                  preload={k === 0}
                  sizes="100vw"
                  style={{ objectPosition: s.pos }}
                  className={clsx(
                    'transition-transform duration-[7000ms] ease-out',
                    // renders on pure black: `lighten` melts their backdrop into the page's #0b0b0d
                    s.fit === 'contain' ? 'object-contain mix-blend-lighten' : 'object-cover',
                    k === i ? 'scale-100' : 'scale-[1.08]',
                  )}
                />
              </div>
            )}
          </div>
        ))}
        {/* blend the stage into the black: left fade, top for the header, bottom for the rail */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0b0d_0%,rgba(11,11,13,.9)_22%,rgba(11,11,13,.55)_42%,rgba(11,11,13,.1)_68%,transparent_85%)] max-lg:bg-[rgba(11,11,13,.72)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b0b0d]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/70 to-transparent" />
      </div>
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 -z-10 size-[620px] rounded-full bg-brand/20 blur-[140px]" />

      {/* copy */}
      <div className="wrap relative flex flex-1 flex-col justify-center pt-[calc(var(--hdr)+clamp(24px,5vh,56px))] pb-10">
        <h1
          className="animate-rise font-display-x max-w-[12ch] text-[clamp(36px,4.4vw,72px)] leading-[1] font-extrabold tracking-[-0.04em]"
          style={{ animationDelay: '0.08s' }}
        >
          Machines that <Verb on={slide.verb === 0}>cut</Verb>, <Verb on={slide.verb === 1}>bend</Verb> &amp;{' '}
          <Verb on={slide.verb === 2}>weld</Verb> metal.
        </h1>
        <p className="animate-rise lead mt-5 max-w-[480px] text-white/65" style={{ animationDelay: '0.16s' }}>
          CNC fiber laser cutting, plasma cutting, press brakes, laser welding and PEB machinery — supplied, installed and serviced across India.
        </p>
        <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.24s' }}>
          <Button href="/products" label="Explore Machines" />
          <QuoteButton label="Get a Free Quote" variant="ghost" />
        </div>

        <dl className="animate-rise mt-[clamp(36px,7vh,72px)] grid max-w-[560px] grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4" style={{ animationDelay: '0.32s' }}>
          {trust.map(([n, label]) => (
            <div key={label}>
              <dt className="font-display-x text-[clamp(20px,1.7vw,27px)] leading-none font-bold tracking-[-0.03em]">{n}</dt>
              <dd className="mt-1.5 text-[12.5px] leading-snug text-white/50">{label}</dd>
            </div>
          ))}
        </dl>

        {/* what's on stage right now */}
        <TLink
          key={slide.href}
          href={slide.href}
          className="animate-rise group absolute right-[clamp(18px,4vw,64px)] bottom-10 hidden items-center gap-4 rounded-2xl bg-white/8 py-3 pr-3 pl-5 ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/14 lg:flex"
        >
          <span>
            <span className="block text-[12px] text-white/55">{slide.tag}</span>
            <span className="block font-display text-[15px] font-semibold">{slide.name}</span>
          </span>
          <span className="grid size-10 place-items-center rounded-full bg-brand transition-transform duration-500 ease-expo group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </TLink>
      </div>

      {/* rail: one tab per line, bar fills while it's on stage */}
      <div className="wrap relative pb-7">
        <div role="tablist" aria-label="Featured machines" className="grid grid-cols-4 gap-3 md:gap-6">
          {heroSlides.map((s, k) => (
            <button
              key={s.img}
              type="button"
              role="tab"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className="group text-left"
            >
              <span className="relative block h-0.5 overflow-hidden rounded-full bg-white/15">
                {k === i ? (
                  <span
                    key={`${i}-bar`}
                    onAnimationEnd={next}
                    className={clsx('absolute inset-0 origin-left animate-bar bg-brand', paused && '[animation-play-state:paused]')}
                  />
                ) : (
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white/40 transition-transform duration-500 group-hover:scale-x-100" />
                )}
              </span>
              <span className="mt-3 flex items-baseline gap-2">
                <span
                  className={clsx(
                    'truncate text-[12.5px] font-semibold transition-colors md:text-[13.5px]',
                    k === i ? 'text-white' : 'text-white/45 group-hover:text-white/80',
                    'max-sm:text-[11px]',
                  )}
                >
                  {s.name}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
