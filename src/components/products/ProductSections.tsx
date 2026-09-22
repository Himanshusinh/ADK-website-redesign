import clsx from 'clsx';
import type { Node } from '@/data/site';
import { SpecTable, CompareTable } from '@/components/shared/SpecTable';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';

/** Specs, feature lists, components and applications — shared by product and range pages. */
export function ProductSections({ node }: { node: Node }) {
  return (
    <>
      {(node.tables || node.compare) && (
        <section className="sec bg-white text-ink">
          <div className="wrap grid gap-[clamp(50px,6vw,90px)]">
            {node.tables?.map((t) => <SpecTable key={t.title} t={t} />)}
            {node.compare && <CompareTable c={node.compare} />}
          </div>
        </section>
      )}

      {node.lists?.map((l, li) => (
        <section key={l.title} className={clsx('sec text-ink', li % 2 ? 'bg-white' : 'bg-paper')}>
          <div className="wrap grid items-start gap-[clamp(36px,6vw,100px)] lg:grid-cols-[.8fr_1.2fr]">
            <div className="lg:sticky lg:top-[120px]">
              <Split className="title-xl">{l.title}</Split>
            </div>
            <ol className="border-t border-line">
              {l.items.map((it, i) => (
                <Reveal as="li" key={it} className="grid grid-cols-[14px_1fr] gap-3 border-b border-line py-[18px] text-[16px]">
                  <span className="mt-[9px] size-1.5 rounded-full bg-brand" />
                  <p>{it}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ))}

      {node.components && (
        <section className="theme-dark glow sec text-ink">
          <div className="wrap">
            <Split className="title-xl">Machine Components</Split>
            <div className="mt-[50px] grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3.5">
              {node.components.map((c, i) => (
                <Reveal
                  key={c}
                  data-spot
                  delay={(i % 4) * 0.06}
                  className="spot grid gap-[26px] rounded-[18px] px-6 py-[26px] font-display text-[17px] leading-tight font-semibold ring-1 ring-line transition-shadow duration-500 hover:ring-brand/40"
                >
                  <span className="h-[3px] w-8 rounded-full bg-brand" />
                  {c}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {node.apps && (
        <section className="sec bg-white text-ink">
          <div className="wrap">
            <Split className="title-xl">Application</Split>
            <ul className="mt-11 flex flex-wrap gap-2.5">
              {node.apps.map((a, i) => (
                <Reveal
                  as="li"
                  key={a}
                  delay={(i % 6) * 0.04}
                  className="cursor-default rounded-full bg-paper px-[22px] py-[13px] text-base font-medium ring-1 ring-line transition-[background-color,color,translate] duration-300 hover:-translate-y-[3px] hover:bg-brand hover:text-white hover:ring-brand"
                >
                  {a}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

/** "Technical sheet on request" note for series ADK hasn't published specs for yet. */
export function SheetNote() {
  return (
    <p className="mt-6 rounded-[14px] bg-paper px-5 py-4 text-[15px] text-muted ring-1 ring-line">
      Full technical sheet for this series is available on request — send us an inquiry and our engineers will share it.
    </p>
  );
}
