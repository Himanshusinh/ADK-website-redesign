import { GraduationCap, Package, Wrench } from 'lucide-react';
import { about } from '@/data/site';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Sweep } from '@/components/motion/Sweep';
import { Reveal } from '@/components/motion/Reveal';

const steps = [
  {
    Icon: Package,
    title: 'Supply',
    text: 'CNC fiber laser cutting, plasma cutting, press brake, laser welding, shearing, panel bender and PEB machines — plus the spares and consumables to run them.',
  },
  { Icon: GraduationCap, title: 'Install & Train', text: about.support[0][1] },
  {
    Icon: Wrench,
    title: 'Service & Spares',
    text: '24*7 online service support, on-time delivery of service and a comprehensive inventory of spare parts, so your machine keeps running.',
  },
];

/** Three plain steps that explain what ADK does, start to finish. */
export function WhatWeDo() {
  return (
    <section className="sec bg-paper text-ink">
      <div className="wrap">
        <div className="mb-[clamp(40px,5vw,64px)] max-w-[900px]">
          <Eyebrow>What we do</Eyebrow>
          <Sweep className="title-xl">
            Supply. Install. <span className="accent">Support.</span>
          </Sweep>
        </div>
        <ol className="grid border-t border-line md:grid-cols-3">
          {steps.map(({ Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.1}
              className="group relative py-9 max-md:border-b max-md:border-line md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-line md:[&:not(:first-child)]:pl-10"
            >
              <span className="absolute top-0 left-0 h-[3px] w-12 bg-brand transition-[width] duration-700 ease-expo group-hover:w-full md:group-[&:not(:first-child)]:left-10" />
              <div className="mb-8 flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-white text-brand ring-1 ring-line">
                  <Icon className="size-6" strokeWidth={1.7} />
                </span>
                <span className="font-display-x text-[56px] leading-none font-black tracking-[-0.05em] text-ink/[.07]">0{i + 1}</span>
              </div>
              <h3 className="font-display-x mb-3 text-[clamp(26px,2.4vw,34px)] font-bold tracking-[-0.03em]">{title}</h3>
              <p className="text-[17px] leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
