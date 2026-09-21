import clsx from 'clsx';
import { childInfo, productHref, type Node } from '@/data/site';
import { QuoteButton } from '@/components/layout/UI';
import { Breadcrumbs, type Trail } from '@/components/shared/PageHero';
import { ProductCard } from '@/components/shared/ProductCard';
import { OtherCategories } from '@/components/shared/OtherCategories';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';
import { ProductGallery } from './ProductGallery';
import { ProductSections, SheetNote } from './ProductSections';

/** A single machine / series page. */
export function ProductView({ node, parents }: { node: Node; parents: Node[] }) {
  const parent = parents[parents.length - 1];
  const trail: Trail = [
    ['Products', '/products'],
    ...parents.map((p) => [p.title ?? p.name, productHref(p.slug)] as [string, string]),
    [node.name, productHref(node.slug)],
  ];
  const siblings = (parent?.children ?? []).filter((c) => c.slug !== node.slug).map(childInfo);

  return (
    <>
      <section className="bg-soft relative overflow-hidden pt-[calc(var(--hdr)+48px)] pb-[clamp(70px,8vw,120px)] text-ink">
        <div className="wrap relative grid items-center gap-[clamp(36px,5vw,90px)] lg:grid-cols-[1.15fr_1fr]">
          <ProductGallery imgs={node.imgs ?? [node.img]} name={node.name} />
          <div>
            <Breadcrumbs trail={trail} />
            <Eyebrow>{parent ? parent.name : 'ADK Machinery'}</Eyebrow>
            <Split as="h1" onLoad delay={0.15} className="font-display-x mb-6 text-[clamp(42px,5.2vw,84px)] leading-[0.98] font-extrabold tracking-[-0.045em]">
              {node.name}
            </Split>
            {node.desc?.map((d) => (
              <Reveal as="p" key={d} className="mb-4 max-w-[58ch] text-lg leading-relaxed text-muted">
                {d}
              </Reveal>
            ))}

            {node.models && (
              <Reveal className="mt-6">
                <p className="mb-3 font-mono text-[12px] tracking-[0.1em] text-muted uppercase">Models</p>
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
                    <dt className="mb-2 font-mono text-xs tracking-[0.12em] text-muted uppercase">{k}</dt>
                    <dd className="font-display text-[clamp(19px,1.7vw,25px)] leading-tight font-bold tracking-[-0.02em]">{v}</dd>
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

      <ProductSections node={node} />

      {siblings.length ? (
        <section className="sec bg-paper text-ink">
          <div className="wrap mb-[30px]">
            <Eyebrow>{parent!.name}</Eyebrow>
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
