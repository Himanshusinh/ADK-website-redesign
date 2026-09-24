'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { GraduationCap, Package, Wrench } from 'lucide-react';
import { about } from '@/data/site';
import { Sweep } from '@/components/motion/Sweep';
import { Reveal } from '@/components/motion/Reveal';

const steps = [
  {
    Icon: Package,
    title: 'Supply',
    img: '/home/what-we-do/supply.jpg',
    text: 'CNC fiber laser cutting, plasma cutting, press brake, laser welding, shearing, panel bender and PEB machines — plus the spares and consumables to run them.',
  },
  { Icon: GraduationCap, title: 'Install & Train', img: '/home/what-we-do/install.jpg', text: about.support[0][1] },
  {
    Icon: Wrench,
    title: 'Service & Spares',
    img: '/home/what-we-do/spares.jpg',
    text: '24*7 online service support, on-time delivery of service and a comprehensive inventory of spare parts, so your machine keeps running.',
  },
];

/** What ADK does, start to finish — hover a panel and it opens. */
export function WhatWeDo() {
  const [open, setOpen] = useState(0);

  return (
    <section className="theme-dark glow sec text-ink">
      <div className="wrap">
        <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-end justify-between gap-6">
          <Sweep className="title-xl">
            Supply. Install. <span className="accent">Support.</span>
          </Sweep>
          <p className="lead max-w-[380px] text-muted">From the first quote to the hundredth service call — one team, all over India.</p>
        </div>

        <Reveal className="flex flex-col gap-3.5 lg:h-[clamp(400px,52vh,560px)] lg:flex-row">
          {steps.map(({ Icon, title, text, img }, i) => {
            const on = i === open;
            return (
              <article
                key={title}
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
                tabIndex={0}
                aria-expanded={on}
                className={clsx(
                  'group relative isolate min-w-0 cursor-default overflow-hidden rounded-[24px] outline-none transition-[flex-grow] duration-[900ms] ease-expo max-lg:min-h-[280px]',
                  on ? 'lg:grow-[2.4]' : 'lg:grow',
                )}
              >
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="(min-width:1024px) 55vw, 100vw"
                  className={clsx('object-cover transition-transform duration-[1400ms] ease-expo', on ? 'scale-100' : 'scale-[1.08]')}
                />
                <div aria-hidden className={clsx('absolute inset-0 transition-opacity duration-700', on ? 'bg-[linear-gradient(180deg,rgba(11,11,13,.25)_0%,rgba(11,11,13,.55)_45%,rgba(11,11,13,.94)_100%)]' : 'bg-[linear-gradient(180deg,rgba(11,11,13,.5)_0%,rgba(11,11,13,.9)_100%)]')} />

                <span className={clsx('absolute top-6 left-6 grid size-11 place-items-center rounded-xl ring-1 backdrop-blur transition-colors duration-500', on ? 'bg-brand text-white ring-brand/60' : 'bg-white/10 text-white ring-white/15')}>
                  <Icon className="size-5" strokeWidth={1.7} />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-[clamp(20px,2.4vw,34px)]">
                  <span className={clsx('mb-4 block h-[3px] rounded-full bg-brand transition-all duration-700 ease-expo', on ? 'w-14 opacity-100' : 'w-7 opacity-60')} />
                  <h3 className="font-display-x text-[clamp(21px,2vw,30px)] leading-tight font-bold tracking-[-0.025em]">{title}</h3>
                  <p
                    className={clsx(
                      'max-w-[46ch] text-[15px] leading-relaxed text-white/70 transition-[opacity,max-height,margin] duration-700 ease-expo lg:overflow-hidden',
                      on ? 'mt-3 max-h-40 opacity-100' : 'mt-0 opacity-100 max-lg:mt-3 lg:max-h-0 lg:opacity-0',
                    )}
                  >
                    {text}
                  </p>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
