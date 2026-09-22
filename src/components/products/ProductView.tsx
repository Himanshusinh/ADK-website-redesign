import clsx from 'clsx';
import { childInfo, productHref, type Node } from '@/data/site';
import { QuoteButton } from '@/components/layout/UI';
import { ProductCard } from '@/components/shared/ProductCard';
import { OtherCategories } from '@/components/shared/OtherCategories';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';
import { ProductGallery } from './ProductGallery';
import { ProductSections, SheetNote } from './ProductSections';
import { AppGrid, CinemaHero, Samples, Sources, Views } from './SeriesSections';

/** A single machine / series page. */
export function ProductView({ node, parents }: { node: Node; parents: Node[] }) {
  const parent = parents[parents.length - 1];
  const siblings = (parent?.children ?? []).filter((c) => c.slug !== node.slug).map(childInfo);
  // samples and applications are set once on a category and apply to everything below it
  const up = [node, ...[...parents].reverse()];
  const samples = up.find((n) => n.samples)?.samples;
  const apps = up.find((n) => n.apps)?.apps;

  return (
    <>
      {node.cutout ? (
        <CinemaHero node={node} />
      ) : (
      <section className="bg-soft relative overflow-hidden pt-[calc(var(--hdr)+48px)] pb-[clamp(70px,8vw,120px)] text-ink">
        <div className="wrap relative grid items-center gap-[clamp(36px,5vw,90px)] lg:grid-cols-[1.15fr_1fr]">
          <ProductGallery imgs={node.imgs ?? [node.img]} name={node.name} />
          <div>
            <Split as="h1" onLoad delay={0.15} className="font-display-x mb-6 text-[clamp(32px,3.6vw,56px)] leading-[0.98] font-extrabold tracking-[-0.045em]">
              {node.name}
            </Split>
            {node.desc?.map((d) => (
              <Reveal as="p" key={d} className="mb-4 max-w-[58ch] text-lg leading-relaxed text-muted">
                {d}
              </Reveal>
            ))}

            {node.models && (
              <Reveal className="mt-6">
                <p className="mb-3 text-[13px] font-semibold text-muted">Models</p>
                <ul className="flex flex-wrap gap-2">
                  {node.models.map((m) => (
                    <li key={m} className="rounded-full bg-white px-4 py-2 text-[15px] font-medium ring-1 ring-line">
                      {m}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {node.highlights && (
              <Reveal as="dl" className="my-8 grid border-y border-line sm:grid-cols-3">
                {node.highlights.map(([k, v], i) => (
                  <div key={k} className={clsx('py-5 pr-4', i > 0 && 'max-sm:border-t max-sm:border-line sm:border-l sm:border-line sm:pl-[18px]')}>
                    <dt className="mb-1.5 text-[13px] text-muted">{k}</dt>
                    <dd className="font-display text-[clamp(16px,1.3vw,20px)] leading-tight font-bold tracking-[-0.02em]">{v}</dd>
                  </div>
                ))}
              </Reveal>
            )}

            <Reveal className="mt-8 flex flex-wrap gap-3.5">
              <QuoteButton product={node.name} label="Request A Quote" />
              <QuoteButton mode="catalogue" label="Download Catalogue" variant="outline" />
            </Reveal>
            {node.sheetOnRequest && (
              <Reveal>
                <SheetNote />
              </Reveal>
            )}
          </div>
        </div>
      </section>
      )}

      {node.sources && <Sources node={node} />}
      {node.cutout && <Views node={node} />}
      {samples && <Samples imgs={samples} name={parents[0]?.name ?? node.name} />}
      {/* applications render as photo tiles below, not as the pill list */}
      <ProductSections node={{ ...node, apps: undefined }} />
      {apps && <AppGrid apps={apps} />}

      {siblings.length ? (
        <section className="sec bg-paper text-ink">
          <div className="wrap mb-[30px]">
            <h2 className="title-lg">More in this range</h2>
          </div>
          <div className="wrap grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-6">
            {siblings.map((it, i) => (
              <ProductCard key={it.name} item={it} i={i} total={siblings.length} />
            ))}
          </div>
        </section>
      ) : (
        <OtherCategories exclude={parents[0]?.slug ?? node.slug} />
      )}
    </>
  );
}
