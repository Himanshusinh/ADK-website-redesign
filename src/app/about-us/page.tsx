import clsx from 'clsx';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Plus } from 'lucide-react';
import { about, industries, timeline } from '@/data/site';
import { PageStart } from '@/components/shared/PageStart';
import { Stats } from '@/components/shared/Stats';
import { Tile } from '@/components/shared/Tile';
import { Button } from '@/components/ui/Button';
import { Split } from '@/components/motion/Split';
import { FillText } from '@/components/motion/FillText';
import { Reveal, RevealImage } from '@/components/motion/Reveal';
import { HScroll } from '@/components/motion/HScroll';

export const metadata: Metadata = { title: 'About Us', description: about.intro[1] };

function SplitBlock({ img, alt, eyebrow, title, children, reverse }: { img: string; alt: string; eyebrow: string; title: string; children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="wrap grid items-center gap-[clamp(40px,7vw,110px)] lg:grid-cols-2">
      <RevealImage className={clsx('aspect-[952/769] rounded-[28px] bg-paper-2', reverse && 'lg:order-2')}>
        <Image src={img} alt={alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
      </RevealImage>
      <div>
        <Split className="title-xl mb-[26px]">{title}</Split>
        {children}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageStart>
      <section className="sec bg-white text-ink">
        <div className="wrap grid items-start gap-[clamp(32px,6vw,110px)] lg:grid-cols-[1fr_1.05fr]">
          <div>
            <Split as="h1" className="title-xl">Shaping the future of sheet metal industries</Split>
          </div>
          <div>
            <FillText className="mb-7 text-[clamp(18px,1.6vw,24px)] leading-[1.4] font-medium tracking-[-0.015em]">{about.intro[0]}</FillText>
            {about.intro.slice(1).map((p) => (
              <Reveal as="p" key={p} className="lead mt-4 text-muted">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
        <div className="wrap">
          <Stats />
        </div>
      </section>
      </PageStart>

      <HScroll
        className="theme-dark glow text-ink"
        trackClassName="relative gap-0 pt-2.5 before:absolute before:inset-x-[clamp(18px,4vw,64px)] before:top-[163px] before:h-px before:bg-line"
        head={
          <div className="wrap mb-[clamp(36px,4vw,60px)] flex flex-wrap items-end justify-between gap-7">
            <div>
              <Split className="title-xl">Expeditions To Success</Split>
            </div>
            <p className="lead max-w-[320px] text-muted">Scroll through a decade of milestones.</p>
          </div>
        }
      >
        {timeline.map(([year, text]) => (
          <article key={year} data-hs-item data-on="true" className="group/tl relative w-[78vw] shrink-0 snap-start pr-[clamp(24px,3vw,50px)] min-[900px]:w-[clamp(280px,26vw,380px)]">
            <span className="font-display-x block h-[140px] text-[clamp(56px,6vw,96px)] leading-none font-extrabold tracking-[-0.05em] text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_rgba(255,255,255,.22)] group-hover/tl:text-ink group-data-[on=true]/tl:text-ink">
              {year}
            </span>
            <span className="mt-[13px] mb-7 block size-3.5 rounded-full bg-[#0b0b0d] shadow-[0_0_0_2px_#e1252d] transition-[background-color,box-shadow] duration-500 group-hover/tl:bg-brand group-data-[on=true]/tl:bg-brand group-data-[on=true]/tl:shadow-[0_0_0_5px_rgba(225,37,45,.18)]" />
            <p className="max-w-[32ch] text-[15px] leading-relaxed text-muted">{text}</p>
          </article>
        ))}
      </HScroll>

      <section className="sec grid gap-[clamp(80px,10vw,150px)] bg-white text-ink">
        <SplitBlock img="/shared/about/who-we-are.webp" alt="Who we are" eyebrow="Welcome to ADK Engineering PVT LTD" title="Who We Are">
          <Reveal as="p" className="lead text-muted">
            {about.who}
          </Reveal>
        </SplitBlock>
        <SplitBlock img="/shared/about/what-we-do.webp" alt="What we do" eyebrow="Time bound services" title="What We Do" reverse>
          <Reveal as="p" className="lead mb-4 font-medium text-ink">
            {about.whatLead}
          </Reveal>
          <Reveal as="p" className="lead text-muted">
            {about.what}
          </Reveal>
        </SplitBlock>
      </section>

      <section className="theme-dark glow sec text-ink">
        <div className="wrap grid items-start gap-[clamp(40px,7vw,110px)] lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Split className="title-xl">Comprehensive Support</Split>
            <Reveal as="p" className="lead mt-[22px] mb-9 text-muted">
              {about.supportLead}
            </Reveal>
            <RevealImage fill={false} className="rounded-3xl ring-1 ring-line">
              <Image src="/shared/about/comprehensive-support.webp" alt="Comprehensive support" width={900} height={700} sizes="(min-width:1024px) 45vw, 100vw" className="h-auto w-full" />
            </RevealImage>
          </div>
          <Reveal className="border-t border-line">
            {about.support.map(([title, body], i) => (
              <details key={title} open={i === 0} className="group border-b border-line">
                <summary className="grid cursor-pointer list-none grid-cols-[1fr_44px] items-center gap-2.5 py-[26px] [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[clamp(17px,1.5vw,22px)] leading-tight font-semibold tracking-[-0.02em] transition-colors group-hover:text-brand">{title}</span>
                  <span className="grid size-11 place-items-center rounded-full ring-1 ring-line transition-[rotate,background-color,color] duration-500 ease-expo group-open:rotate-45 group-open:bg-brand group-open:text-white group-open:ring-brand">
                    <Plus className="size-5" />
                  </span>
                </summary>
                <p className="pb-7 text-[15px] leading-relaxed text-muted md:pr-[54px]">{body}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="sec bg-white text-ink">
        <div className="wrap mb-[clamp(40px,5vw,70px)] flex flex-wrap items-end justify-between gap-7">
          <div>
            <Split className="title-xl">Industries We Serve</Split>
          </div>
          <Button href="/application" label="All applications" variant="dark" />
        </div>
        <div className="wrap grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((it, i) => (
            <Tile key={it.name} img={it.img} name={it.name} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </section>
    </>
  );
}
