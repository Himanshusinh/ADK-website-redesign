'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { TLink } from '@/components/layout/Transition';
import { QuoteButton } from '@/components/layout/UI';
import { Button } from '@/components/ui/Button';

export type BrowserItem = { name: string; href: string; img: string };
export type BrowserSub = BrowserItem & {
  count: number;
  desc?: string;
  highlights?: [string, string][];
  models?: string[];
  onRequest?: boolean;
  items: BrowserItem[];
};
export type BrowserLine = { name: string; href: string; img: string; blurb: string; subs: BrowserSub[] };

/**
 * One-screen product browser.
 * Left: every product line. Right: its ranges as horizontal names — hover a name to
 * reveal the products inside it, click anything to open its own page.
 */
export function ProductBrowser({ lines }: { lines: BrowserLine[] }) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [more, setMore] = useState(false);
  const line = lines[i];
  const active: BrowserSub | undefined = line.subs[sub] ?? line.subs[0];

  const pick = (k: number) => {
    setI(k);
    setSub(0);
  };

  /** true while there are products hidden below the fold — drives the fade-out edge. */
  const gauge = (el: HTMLElement | null) => setMore(!!el && el.scrollHeight - el.clientHeight - el.scrollTop > 8);
  const measure = useCallback((el: HTMLDivElement | null) => gauge(el), []);

  return (
    <>
      {/* desktop */}
      <div className="hidden gap-6 lg:grid lg:h-[calc(100svh-var(--hdr)-156px)] lg:min-h-[440px] lg:grid-cols-[286px_1fr]">
        <ul role="tablist" aria-orientation="vertical" aria-label="Product lines" data-lenis-prevent
          className="no-scrollbar grid content-start gap-1 overflow-y-auto">
          {lines.map((x, k) => (
            <li key={x.href}>
              <button
                type="button"
                role="tab"
                aria-selected={k === i}
                onMouseEnter={() => pick(k)}
                onFocus={() => pick(k)}
                onClick={() => pick(k)}
                className={clsx(
                  'group flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors duration-300',
                  k === i ? 'bg-ink text-white' : 'hover:bg-white/70',
                )}
              >
                <span className="font-display text-[17px] leading-tight font-semibold">{x.name}</span>
                <ArrowRight className={clsx('ml-auto size-4 shrink-0 transition-colors', k === i ? 'text-brand' : 'text-transparent group-hover:text-brand')} />
              </button>
            </li>
          ))}
        </ul>

        <div role="tabpanel" className="flex min-h-0 flex-col gap-3.5 rounded-[28px] bg-white/70 px-7 pt-6 pb-4">
          <div className="flex shrink-0 flex-wrap items-center gap-x-5 gap-y-2">
            <h2 className="font-display-x text-[clamp(23px,2.1vw,34px)] leading-[1.05] font-bold tracking-[-0.03em]">{line.name}</h2>
            <span className="text-[15px] text-muted">{line.blurb}</span>
            <div className="ml-auto flex items-center gap-5">
              <TLink href={line.href} className="group inline-flex items-center gap-1.5 text-[15px] font-semibold">
                View all
                <ArrowUpRight className="size-4 text-brand transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </TLink>
              <QuoteButton product={active?.name ?? line.name} label="Get a quote" size="sm" />
            </div>
          </div>

          {/* ranges as horizontal names — hover to preview, click to open */}
          <div className="flex shrink-0 flex-wrap gap-x-7 gap-y-1 border-b border-line/60">
            {line.subs.map((s, k) => (
              <TLink
                key={`${s.href}::${s.name}`}
                href={s.href}
                onMouseEnter={() => setSub(k)}
                onFocus={() => setSub(k)}
                className={clsx(
                  'group relative shrink-0 pb-3 text-[16px] font-semibold whitespace-nowrap transition-colors duration-300',
                  k === sub ? 'text-ink' : 'text-ink/40 hover:text-ink',
                )}
              >
                {s.name}
                {s.count > 0 && <sup className="ml-1 text-[11px] font-semibold text-brand">{s.count}</sup>}
                <span
                  className={clsx(
                    'absolute inset-x-0 -bottom-px h-0.5 origin-left bg-brand transition-transform duration-500 ease-expo',
                    k === sub ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </TLink>
            ))}
          </div>

          {/* products of the hovered range */}
          <div
            key={active?.href ?? line.href}
            ref={measure}
            onScroll={(e) => gauge(e.currentTarget)}
            data-lenis-prevent
            className={clsx(
              'animate-rise min-h-0 flex-1 overflow-x-hidden overflow-y-auto [scrollbar-color:var(--color-line)_transparent] [scrollbar-width:thin]',
              more && '[mask-image:linear-gradient(to_bottom,#000_calc(100%-56px),transparent)]',
            )}
          >
            {active?.items.length ? (
              <div className="grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(178px,1fr))] gap-1">
                {active.items.map((it) => (
                <TLink
                  key={it.href}
                  href={it.href}
                  data-cursor="View"
                  className="group flex flex-col rounded-[22px] px-3 pt-2.5 pb-2 transition-[background-color,box-shadow] duration-500 ease-expo hover:bg-white hover:shadow-[0_30px_60px_-38px_rgba(17,17,20,.45)]"
                >
                  <span className="relative block h-[clamp(138px,17vh,196px)]">
                    <Image
                      src={it.img}
                      alt={it.name}
                      fill
                      sizes="(min-width:1600px) 260px, 220px"
                      className="object-contain mix-blend-multiply transition-transform duration-700 ease-expo group-hover:-translate-y-1.5 group-hover:scale-[1.05]"
                    />
                  </span>
                  <span className="mt-2.5 font-display text-[17px] leading-tight font-semibold transition-colors duration-300 group-hover:text-brand">{it.name}</span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[13.5px] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View details <ArrowUpRight className="size-3.5 text-brand" />
                  </span>
                </TLink>
                ))}
              </div>
            ) : (
              <div className="flex h-full min-h-0 items-center gap-10">
                <span className="relative block h-full min-h-[240px] w-[54%] shrink-0">
                  <Image src={active?.img ?? line.img} alt={active?.name ?? line.name} fill sizes="45vw" className="object-contain mix-blend-multiply" />
                </span>
                <div className="flex min-w-0 flex-col items-start gap-5">
                  <h3 className="font-display-x text-[clamp(26px,2.4vw,40px)] leading-[1.05] font-bold tracking-[-0.03em]">{active?.name ?? line.name}</h3>
                  {active?.desc && <p className="max-w-[44ch] text-[16.5px] leading-relaxed text-muted">{active.desc}</p>}

                  {!!active?.highlights?.length && (
                    <dl className="grid w-full max-w-[46ch] grid-cols-[repeat(auto-fit,minmax(132px,1fr))] border-y border-line/70">
                      {active.highlights.map(([k, v], n) => (
                        <div key={k} className={clsx('py-3.5 pr-4', n > 0 && 'border-l border-line/70 pl-4')}>
                          <dt className="mb-1 text-[12.5px] text-muted">{k}</dt>
                          <dd className="font-display text-[16px] leading-tight font-bold">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {!!active?.models?.length && (
                    <ul className="flex flex-wrap gap-2">
                      {active.models.map((m) => (
                        <li key={m} className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink/70">
                          {m}
                        </li>
                      ))}
                    </ul>
                  )}

                  {!active?.desc && !active?.highlights?.length && !active?.models?.length && active?.onRequest && (
                    <p className="max-w-[40ch] text-[15.5px] leading-relaxed text-muted">Full technical sheet for this machine is available on request.</p>
                  )}

                  <Button href={active?.href ?? line.href} label="Open page" variant="dark" size="sm" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile: accordion with plain range rows */}
      <div className="grid min-w-0 gap-1 lg:hidden">
        {lines.map((x) => (
          <details key={x.href} className="group min-w-0 border-b border-line/70">
            <summary className="flex cursor-pointer list-none items-center gap-3 py-3 [&::-webkit-details-marker]:hidden">
              <span className="relative size-10 shrink-0">
                <Image src={x.img} alt="" fill sizes="40px" className="object-contain mix-blend-multiply" />
              </span>
              <span className="font-display text-[16px] leading-tight font-semibold">{x.name}</span>
              <span className="ml-auto grid size-7 shrink-0 place-items-center rounded-full text-muted transition-transform duration-300 group-open:rotate-45 group-open:text-brand">
                <Plus className="size-4" />
              </span>
            </summary>
            <div className="grid gap-0.5 pb-3 pl-[52px]">
              {(x.subs.length ? x.subs : []).map((s) => (
                <TLink key={`${s.href}::${s.name}`} href={s.href} className="flex items-center gap-2 py-2 text-[15px] font-medium">
                  {s.name}
                  {s.count > 0 && <span className="text-[11px] font-semibold text-brand">{s.count}</span>}
                  <ArrowUpRight className="ml-auto size-4 text-brand" />
                </TLink>
              ))}
              <TLink href={x.href} className="mt-1 inline-flex items-center gap-2 text-[15px] font-semibold text-ink">
                View range <ArrowRight className="size-4 text-brand" />
              </TLink>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
