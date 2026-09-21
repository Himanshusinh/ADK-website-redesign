'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { explorer, findNode, productHref } from '@/data/site';
import { pad } from '@/lib/utils';
import { TLink } from '@/components/layout/Transition';
import { QuoteButton } from '@/components/layout/UI';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Sweep } from '@/components/motion/Sweep';

const lines = explorer.map((e) => {
  const node = findNode(e.slug)!.node;
  const rep = e.rep ? findNode(e.rep)!.node : node;
  return {
    label: e.label,
    slug: e.slug,
    name: node.title ?? node.name,
    href: productHref(node.slug),
    img: rep.img,
    desc: rep.desc?.[0]?.split(/(?<=\.)\s/)[0],
    highlights: rep.highlights,
    models: (node.children ?? []).map((c) => ({ name: c.name, href: productHref(c.slug) })),
  };
});

/** "What we sell": pick a product line, see its machine, key numbers and ranges — no long scrolling. */
export function Explorer() {
  const [i, setI] = useState(0);
  const l = lines[i];

  return (
    <section id="range" className="sec scroll-mt-16 bg-white text-ink">
      <div className="wrap">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>What we sell</Eyebrow>
            <Sweep className="title-xl">
              Our machine <span className="accent">range</span>
            </Sweep>
          </div>
          <p className="lead max-w-[380px] text-muted">Eight product lines — every machine installed, trained and serviced by ADK engineers.</p>
        </div>

        <div role="tablist" aria-label="Product lines" className="no-scrollbar -mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1">
          {lines.map((x, k) => (
            <button
              key={x.slug}
              type="button"
              role="tab"
              aria-selected={k === i}
              onClick={() => setI(k)}
              className={clsx(
                'shrink-0 rounded-full px-5 py-3 text-[15.5px] font-medium transition-colors duration-300',
                k === i ? 'bg-ink text-white' : 'bg-paper text-ink/70 ring-1 ring-line hover:text-ink',
              )}
            >
              {x.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="grid items-center gap-8 rounded-[32px] bg-paper p-[clamp(20px,3vw,44px)] ring-1 ring-line lg:grid-cols-[1.15fr_1fr]">
          <div className="relative aspect-[4/3]">
            {lines.map((x, k) => (
              <Image
                key={x.slug}
                src={x.img}
                alt={k === i ? x.name : ''}
                fill
                sizes="(min-width:1024px) 50vw, 100vw"
                className={clsx(
                  'object-contain mix-blend-multiply transition-[opacity,translate] duration-700 ease-expo',
                  k === i ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-8 opacity-0',
                )}
              />
            ))}
          </div>

          <div key={l.slug} className="animate-rise">
            <p className="font-mono text-sm text-brand">
              {pad(i + 1)} / {pad(lines.length)}
            </p>
            <h3 className="font-display-x mt-3 text-[clamp(32px,3.4vw,52px)] leading-[1.02] font-bold tracking-[-0.03em]">{l.name}</h3>
            {l.desc && <p className="lead mt-4 text-muted">{l.desc}</p>}

            {l.highlights && (
              <dl className="my-7 grid grid-cols-3 border-y border-line">
                {l.highlights.map(([k, v], n) => (
                  <div key={k} className={clsx('py-4 pr-3', n > 0 && 'border-l border-line pl-4')}>
                    <dt className="mb-1.5 font-mono text-[11.5px] tracking-[0.1em] text-muted uppercase">{k}</dt>
                    <dd className="font-display text-[clamp(16px,1.4vw,21px)] leading-tight font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            {l.models.length > 0 && (
              <div className="mb-8">
                <p className="mb-3 font-mono text-[12px] tracking-[0.1em] text-muted uppercase">Ranges</p>
                <ul className="flex flex-wrap gap-2">
                  {l.models.map((m) => (
                    <li key={m.name}>
                      <TLink href={m.href} className="inline-block rounded-full bg-white px-4 py-2 text-[15px] ring-1 ring-line transition-colors hover:text-brand hover:ring-brand">
                        {m.name}
                      </TLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <Button href={l.href} label="View range" variant="dark" />
              <QuoteButton product={l.name} label="Get a quote" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
