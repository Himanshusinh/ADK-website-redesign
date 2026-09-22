import Image from 'next/image';
import { GraduationCap, Package, Wrench } from 'lucide-react';
import { about } from '@/data/site';
import { Sweep } from '@/components/motion/Sweep';
import { Reveal } from '@/components/motion/Reveal';

const steps = [
  {
    Icon: Package,
    title: 'Supply',
    img: '/images/about.webp',
    text: 'CNC fiber laser cutting, plasma cutting, press brake, laser welding, shearing, panel bender and PEB machines — plus the spares and consumables to run them.',
  },
  { Icon: GraduationCap, title: 'Install & Train', img: '/images/gallery/006.webp', text: about.support[0][1] },
  {
    Icon: Wrench,
    title: 'Service & Spares',
    img: '/images/comprehensive-support.webp',
    text: '24*7 online service support, on-time delivery of service and a comprehensive inventory of spare parts, so your machine keeps running.',
  },
];

/** Three plain steps that explain what ADK does, start to finish — each with a real photo. */
export function WhatWeDo() {
  return (
    <section className="theme-dark glow sec text-ink">
      <div className="wrap">
        <div className="mb-[clamp(32px,4vw,52px)] flex flex-wrap items-end justify-between gap-6">
          <div>
            <Sweep className="title-xl">
              Supply. Install. <span className="accent">Support.</span>
            </Sweep>
          </div>
          <p className="lead max-w-[380px] text-muted">From the first quote to the hundredth service call — one team, all over India.</p>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map(({ Icon, title, text, img }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1} className="group overflow-hidden rounded-[22px] bg-paper ring-1 ring-line">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  sizes="(min-width:768px) 32vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-[#141417]/10 to-transparent" />
                <span className="absolute top-4 left-4 grid size-11 place-items-center rounded-xl bg-[#0b0b0d]/70 text-brand ring-1 ring-white/10 backdrop-blur">
                  <Icon className="size-5" strokeWidth={1.7} />
                </span>
              </div>
              <div className="relative px-6 pt-2 pb-7">
                <span className="absolute top-0 left-6 h-[3px] w-10 bg-brand transition-[width] duration-700 ease-expo group-hover:w-[calc(100%-48px)]" />
                <h3 className="font-display-x mt-5 mb-2.5 text-[clamp(20px,1.7vw,24px)] font-bold tracking-[-0.02em]">{title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
