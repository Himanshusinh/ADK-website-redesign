import clsx from 'clsx';
import Image from 'next/image';
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

/** Feature panels in the reference's rhythm: centred title and one line, then a wide close-up. */
export function Features({ node }: { node: Node }) {
  return (
    <>
      {node.features!.map((f, i) => (
        <section key={f.title} className={clsx('sec text-ink', i % 2 ? 'bg-soft' : 'bg-white')}>
          <div className="wrap">
            <div className="mx-auto mb-[clamp(28px,4vw,48px)] max-w-[760px] text-center">
              <Split className="title-xl">{f.title}</Split>
              <Reveal as="p" className="lead mt-4 text-muted">
                {f.text}
              </Reveal>
            </div>
            <Reveal
              className="relative mx-auto overflow-hidden rounded-[28px] bg-[#0b0b0d]"
              style={{ maxWidth: (f.ratio ?? 2.35) < 1.8 ? 980 : undefined }}
            >
              <Parallax amount={5} scale={[1.1, 1]} className="relative max-md:!aspect-[4/3]" style={{ aspectRatio: f.ratio ?? 2.35 }}>
                <Image src={f.img} alt={`${node.name} — ${f.title}`} fill sizes="(min-width:1480px) 1352px, 100vw" className="object-cover" />
              </Parallax>
              {f.points && <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b0b0d]/85 to-transparent" />}
              {f.points && (
                <ul className="absolute bottom-[clamp(14px,2.4vw,28px)] left-[clamp(14px,2.4vw,28px)] flex flex-wrap gap-2">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13.5px] font-medium text-white ring-1 ring-white/20 backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </section>
      ))}
    </>
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
