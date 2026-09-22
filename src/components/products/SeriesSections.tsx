import clsx from 'clsx';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { appPhoto, type Node } from '@/data/site';
import { LightboxTrigger, QuoteButton } from '@/components/layout/UI';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';
import { Tile } from '@/components/shared/Tile';
import { SheetNote } from './ProductSections';

/** Cinematic opener for machines that have a transparent render: title, machine on a dark stage, key figures. */
export function CinemaHero({ node }: { node: Node }) {
  return (
    <section className="theme-dark glow relative overflow-hidden pt-[calc(var(--hdr)+clamp(28px,5vh,56px))] text-ink">
      <div className="wrap relative text-center">
        <Split as="h1" onLoad delay={0.1} className="font-display-x text-[clamp(34px,4.2vw,64px)] leading-[1] font-extrabold tracking-[-0.04em]">
          {node.name}
        </Split>
        {node.desc?.[0] && (
          <Reveal as="p" className="lead mx-auto mt-4 max-w-[560px] text-muted">
            {node.desc[0]}
          </Reveal>
        )}
        <Reveal className="mt-7 flex flex-wrap justify-center gap-3">
          <QuoteButton product={node.name} label="Request A Quote" />
          <QuoteButton mode="catalogue" label="Download Catalogue" variant="ghost" />
        </Reveal>
      </div>

      {/* the machine on a lit floor */}
      <div className="relative mx-auto mt-[clamp(4px,2vh,24px)] w-full max-w-[min(1080px,calc((100svh-var(--hdr)-260px)*1.62))] px-[clamp(8px,3vw,40px)]">
        <div aria-hidden className="absolute inset-x-[12%] bottom-[8%] h-[38%] rounded-[50%] bg-white/[.07] blur-[60px]" />
        <Parallax amount={4} className="relative aspect-[2400/1482]">
          <Image src={node.cutout!} alt={node.name} fill preload sizes="(min-width:1080px) 1080px, 100vw" className="object-contain" />
        </Parallax>
      </div>

      {node.highlights && (
        <dl className="wrap relative grid grid-cols-2 border-t border-line md:grid-cols-4">
          {node.highlights.map(([k, v], i) => (
            <Reveal
              key={k}
              delay={i * 0.06}
              className={clsx('py-[clamp(22px,3vw,36px)] pr-4', i % 2 && 'max-md:border-l max-md:border-line max-md:pl-5', i > 0 && 'md:border-l md:border-line md:pl-7', i > 1 && 'max-md:border-t max-md:border-line')}
            >
              <dd className="font-display-x text-[clamp(20px,2vw,30px)] leading-tight font-bold tracking-[-0.03em]">{v}</dd>
              <dt className="mt-1.5 text-[13.5px] text-muted">{k}</dt>
            </Reveal>
          ))}
        </dl>
      )}
      {node.sheetOnRequest && (
        <div className="wrap pb-10">
          <SheetNote />
        </div>
      )}
    </section>
  );
}

/** The fiber laser sources a machine can be ordered with. */
export function Sources({ node }: { node: Node }) {
  return (
    <section className="sec bg-white text-ink">
      <div className="wrap grid items-center gap-[clamp(36px,6vw,100px)] lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="relative aspect-[2000/1211]">
          <Image src={node.img} alt={`${node.name} front view`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-contain mix-blend-multiply" />
        </Reveal>
        <div>
          <Split className="title-xl">Choose your laser source</Split>
          <Reveal as="p" className="lead mt-4 max-w-[46ch] text-muted">
            The {node.name} can be configured with any of these fiber laser sources.
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {node.sources!.map((s, i) => (
              <Reveal
                as="li"
                key={s}
                delay={i * 0.08}
                className="group relative overflow-hidden rounded-2xl bg-paper px-5 py-6 ring-1 ring-line transition-colors duration-500 hover:bg-ink hover:text-on-ink"
              >
                <span className="absolute top-0 left-5 h-[3px] w-8 bg-brand transition-[width] duration-700 ease-expo group-hover:w-[calc(100%-40px)]" />
                <span className="font-display-x block text-[clamp(17px,1.4vw,21px)] font-bold tracking-[-0.02em]">{s}</span>
                <span className="mt-1 block text-[13px] opacity-60">Fiber laser source</span>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-8">
            <QuoteButton product={node.name} label="Ask which source fits you" variant="dark" size="sm" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Product photos from every side; click to open full screen. */
export function Views({ node }: { node: Node }) {
  const imgs = node.imgs ?? [node.img];
  return (
    <section className="bg-soft sec text-ink">
      <div className="wrap">
        <Split className="title-xl mb-[clamp(28px,4vw,48px)]">Every angle</Split>
        <div className="grid gap-5 md:grid-cols-2">
          {imgs.map((src, k) => (
            <Reveal key={src} delay={k * 0.08}>
              <LightboxTrigger
                images={imgs}
                index={k}
                label={`View ${node.name} image ${k + 1} full screen`}
                className="group relative block aspect-[2000/1211] w-full cursor-zoom-in overflow-hidden rounded-[24px] bg-white ring-1 ring-line"
              >
                <Image src={src} alt={`${node.name} view ${k + 1}`} fill sizes="(min-width:768px) 48vw, 100vw" className="object-contain p-4 transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.04]" />
                <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full bg-ink text-on-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="size-4" />
                </span>
              </LightboxTrigger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Parts cut on the machine family. */
export function Samples({ imgs, name }: { imgs: string[]; name: string }) {
  return (
    <section className="theme-dark glow sec text-ink">
      <div className="wrap">
        <div className="mb-[clamp(28px,4vw,48px)] flex flex-wrap items-end justify-between gap-5">
          <Split className="title-xl">Sample display</Split>
          <p className="lead max-w-[380px] text-muted">Parts cut on {name.toLowerCase()} — tubes, profiles and sheet.</p>
        </div>
        <div className="grid auto-rows-[clamp(150px,17vw,250px)] grid-cols-2 gap-4 md:grid-cols-4">
          {imgs.map((src, k) => (
            <Reveal key={src} delay={(k % 4) * 0.06} className={clsx(k === 0 && 'col-span-2 row-span-2')}>
              <LightboxTrigger
                images={imgs}
                index={k}
                label={`View sample ${k + 1} full screen`}
                className="group relative block size-full cursor-zoom-in overflow-hidden rounded-[20px] bg-[#f1f0ec]"
              >
                <Image src={src} alt={`Cut sample ${k + 1}`} fill sizes={k === 0 ? '(min-width:768px) 50vw, 100vw' : '(min-width:768px) 25vw, 50vw'} className="object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.06]" />
              </LightboxTrigger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Where the machine is used, as photo tiles. */
export function AppGrid({ apps }: { apps: string[] }) {
  const withPhotos = apps.map((a) => ({ name: a, img: appPhoto(a) })).filter((a): a is { name: string; img: string } => !!a.img);
  if (!withPhotos.length) return null;
  return (
    <section className="theme-dark sec text-ink">
      <div className="wrap">
        <Split className="title-xl mb-[clamp(28px,4vw,48px)]">Applications</Split>
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {withPhotos.map((a, i) => (
            <Tile key={a.name} img={a.img} name={a.name} delay={(i % 5) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
