import clsx from 'clsx';
import Image from 'next/image';
import { appPhoto, type Node } from '@/data/site';
import { LightboxTrigger, QuoteButton } from '@/components/layout/UI';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';
import { Parallax } from '@/components/motion/Parallax';
import { Counter } from '@/components/motion/Counter';
import { Tile } from '@/components/shared/Tile';
import { SheetNote } from './ProductSections';
import { SwitcherBody } from './SwitcherBody';

/** Cinematic opener for machines that have a transparent render: title, machine on a dark stage, key figures. */
export function CinemaHero({ node }: { node: Node }) {
  return (
    <section className="theme-dark glow aura relative isolate overflow-hidden pt-[calc(var(--hdr)+clamp(28px,5vh,56px))] text-ink">
      <div className="wrap relative text-center">
        <Split as="h1" onLoad delay={0.1} className="font-display-x text-[clamp(34px,4.2vw,64px)] leading-[1] font-semibold tracking-[-0.018em]">
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

      {/* the machine: a transparent render on a lit floor, or a full-bleed photo */}
      {node.cutout ? (
        <div className="relative mx-auto mt-[clamp(4px,2vh,24px)] w-full max-w-[min(1080px,calc((100svh-var(--hdr)-260px)*1.62))] px-[clamp(8px,3vw,40px)]">
          <div aria-hidden className="absolute inset-x-[12%] bottom-[8%] h-[38%] rounded-[50%] bg-white/[.07] blur-[60px]" />
          <Parallax amount={4} className="relative aspect-[2400/1482]">
            <Image src={node.cutout} alt={node.name} fill preload sizes="(min-width:1080px) 1080px, 100vw" className="object-contain" />
          </Parallax>
        </div>
      ) : (
        <div className="relative mx-auto mt-[clamp(12px,2.5vh,32px)] w-full max-w-[min(1480px,calc((100svh-var(--hdr)-360px)*2.4))] px-[clamp(8px,3vw,40px)]">
          <div className="relative aspect-[24/10] overflow-hidden rounded-[28px] max-md:aspect-[4/3]">
            <Parallax amount={4} scale={[1.08, 1]} className="absolute inset-0">
              {node.heroVideo ? (
                <video
                  src={node.heroVideo}
                  poster={node.heroImg}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={node.name}
                  className="size-full object-cover"
                />
              ) : (
                <Image src={node.heroImg!} alt={node.name} fill preload sizes="100vw" className="object-cover" />
              )}
            </Parallax>
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,13,.65)_100%)]" />
          </div>
        </div>
      )}

      {node.highlights && (
        <dl className="wrap relative grid grid-cols-2 border-t border-line md:grid-cols-4">
          {node.highlights.map(([k, v], i) => (
            <Reveal
              key={k}
              delay={i * 0.06}
              className={clsx('py-[clamp(22px,3vw,36px)] pr-4', i % 2 && 'max-md:border-l max-md:border-line max-md:pl-5', i > 0 && 'md:border-l md:border-line md:pl-7', i > 1 && 'max-md:border-t max-md:border-line')}
            >
              <dd className="font-display-x text-[clamp(20px,2vw,30px)] leading-tight font-semibold tracking-[-0.016em]">{v}</dd>
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

/** Count-up figure. `onImage` styling is used when it sits over a photo. */
function Stat({ value, unit, label, onImage }: { value: string; unit: string; label: string; onImage?: boolean }) {
  return (
    <div className="min-w-0">
      <p className={clsx('font-display-x leading-none font-semibold tracking-[-0.016em]', onImage ? 'text-[clamp(26px,2.6vw,40px)] text-white' : 'text-[clamp(26px,3vw,44px)]')}>
        <Counter value={Number(value)} decimals={value.includes('.') ? 1 : 0} />
        <span className="ml-0.5 text-[0.5em] font-semibold text-brand">{unit}</span>
      </p>
      <p className={clsx('mt-1.5 max-w-[24ch] text-[13.5px] font-medium', onImage ? 'text-white/70' : 'text-muted')}>{label}</p>
    </div>
  );
}

/** Thin rule between the full-bleed panels — a red segment draws in as it scrolls up. */
function Rule() {
  return (
    <div aria-hidden className="bg-[#0b0b0d] px-[clamp(18px,4vw,64px)] py-[clamp(16px,2.4vw,30px)]">
      <Reveal className="relative mx-auto h-px w-full max-w-[1480px] bg-white/12">
        <span className="absolute inset-y-0 left-0 w-[clamp(60px,12vw,190px)] bg-brand" />
      </Reveal>
    </div>
  );
}

/** Feature panels: the picture runs edge to edge and the copy sits on it. */
export function Features({ node }: { node: Node }) {
  return (
    <>
      {node.features!.map((f, i) => (
        <div key={f.title}>
          {i > 0 && <Rule />}
          {f.videos ? (
            <section className="sec bg-[#0b0b0d] text-white">
              <div className="wrap">
                <div className="mx-auto mb-[clamp(24px,3.5vw,44px)] max-w-[820px] text-center">
                  <Split className="font-display-x text-[clamp(25px,3vw,46px)] leading-[1.06] font-semibold tracking-[-0.016em]">{f.title}</Split>
                  {f.text && (
                    <Reveal as="p" className="mt-4 text-[clamp(15px,1.25vw,19px)] leading-relaxed font-medium text-white/80">
                      {f.text}
                    </Reveal>
                  )}
                </div>
                <Reveal className="grid gap-4 sm:grid-cols-2">
                  {f.videos.map((v) => (
                    <video key={v} src={v} autoPlay muted loop playsInline preload="none" className="aspect-video w-full rounded-[22px] bg-[#0b0b0d] object-cover" />
                  ))}
                </Reveal>
              </div>
            </section>
          ) : (
            <section className="relative isolate h-[clamp(520px,88svh,900px)] overflow-hidden bg-[#0b0b0d] text-white">
              <Parallax amount={5} scale={[1.1, 1]} className="absolute inset-0">
                {f.video ? (
                  <video src={f.video} poster={f.img} autoPlay muted loop playsInline preload="none" className="size-full object-cover" />
                ) : (
                  <Image src={f.img} alt={`${node.name} — ${f.title}`} fill sizes="100vw" className="object-cover" />
                )}
              </Parallax>
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,13,.5)_0%,rgba(11,11,13,.08)_30%,rgba(11,11,13,.86)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 px-[clamp(18px,4vw,64px)] pb-[clamp(30px,5vw,72px)]">
                <div className={clsx('mx-auto w-full max-w-[1480px]', i % 2 ? 'lg:flex lg:justify-end lg:text-right' : '')}>
                  <div className="max-w-[46ch]">
                    <Split className="font-display-x text-[clamp(26px,3.4vw,52px)] leading-[1.05] font-semibold tracking-[-0.016em] text-white">{f.title}</Split>
                    {f.text && (
                      <Reveal as="p" className="mt-4 text-[clamp(15px,1.25vw,19px)] leading-relaxed font-medium text-white/85">
                        {f.text}
                      </Reveal>
                    )}
                    {f.stats && (
                      <Reveal className={clsx('mt-[clamp(20px,2.6vw,34px)] flex flex-wrap gap-x-[clamp(26px,4vw,64px)] gap-y-5 border-t border-white/15 pt-[clamp(16px,2vw,26px)]', i % 2 && 'lg:justify-end')}>
                        {f.stats.map(([v, u, l]) => (
                          <Stat key={l} value={v} unit={u} label={l} onImage />
                        ))}
                      </Reveal>
                    )}
                    {f.points && (
                      <ul className={clsx('mt-5 flex flex-wrap gap-2', i % 2 && 'lg:justify-end')}>
                        {f.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13.5px] font-medium text-white ring-1 ring-white/20 backdrop-blur-md">
                            <span className="size-1.5 rounded-full bg-brand" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </>
  );
}

/** Tabbed feature carousel: pick a tab (or let it run) and its picture cross-fades in. */
export function Switcher({ items, name }: { items: NonNullable<Node['switcher']>; name: string }) {
  return (
    <section className="theme-dark glow sec text-ink">
      <div className="wrap">
        <Split className="title-xl mb-[clamp(24px,3vw,40px)]">Cutting head intelligence</Split>
        <SwitcherBody items={items} name={name} />
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
        <div className={clsx('grid gap-4', imgs.length === 1 ? 'grid-cols-1' : 'auto-rows-[clamp(150px,17vw,250px)] grid-cols-2 md:grid-cols-4')}>
          {imgs.map((src, k) => (
            <Reveal key={src} delay={(k % 4) * 0.06} className={clsx(k === 0 && 'col-span-2 row-span-2')}>
              <LightboxTrigger
                images={imgs}
                index={k}
                label={`View sample ${k + 1} full screen`}
                className={clsx('group relative block size-full cursor-zoom-in overflow-hidden rounded-[20px] bg-[#f1f0ec]', imgs.length === 1 && 'aspect-[24/9]')}
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

/** Where this machine is used — the list its own page gives. */
export function AppGrid({ apps }: { apps: string[] }) {
  const seen = new Set<string>();
  const list = apps.filter((a) => {
    const k = a.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  const tiles = list.map((a) => ({ name: a, img: appPhoto(a) })).filter((a): a is { name: string; img: string } => !!a.img);
  const rest = list.filter((a) => !appPhoto(a));
  if (!tiles.length && !rest.length) return null;
  return (
    <section className="theme-dark sec text-ink">
      <div className="wrap">
        <Split className="title-xl mb-[clamp(28px,4vw,48px)]">Applications</Split>
        {!!tiles.length && (
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
            {tiles.map((a, i) => (
              <Tile key={a.name} img={a.img} name={a.name} delay={(i % 4) * 0.05} />
            ))}
          </div>
        )}
        {!!rest.length && (
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {rest.map((a) => (
              <li key={a} className="rounded-full bg-paper px-[18px] py-2.5 text-[14.5px] font-medium ring-1 ring-line">
                {a}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
