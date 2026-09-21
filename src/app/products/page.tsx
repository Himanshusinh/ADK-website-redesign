import type { Metadata } from 'next';
import { productHref, productTree } from '@/data/site';
import { Breadcrumbs } from '@/components/shared/PageHero';
import { ProductBrowser, type BrowserLine, type BrowserSub } from '@/components/products/ProductBrowser';

export const metadata: Metadata = { title: 'Products' };

const lines: BrowserLine[] = productTree.map((c) => ({
  name: c.name,
  href: productHref(c.slug),
  img: c.img,
  blurb: c.parts?.length
    ? `${c.parts.length} items`
    : c.children?.length
      ? `${c.children.length} ${c.children.length === 1 ? 'range' : 'ranges'}`
      : c.desc?.[0] ?? 'Single machine line',
  subs: (c.children ?? [])
    .map((s): BrowserSub => ({
      name: s.name,
      href: productHref(s.slug),
      img: s.img,
      count: s.children?.length ?? 0,
      desc: s.desc?.[0],
      highlights: s.highlights,
      models: s.models,
      onRequest: s.sheetOnRequest,
      items: (s.children ?? []).map((t) => ({ name: t.name, href: productHref(t.slug), img: t.img })),
    }))
    .concat((c.parts ?? []).map((p): BrowserSub => ({ name: p.name, href: productHref(c.slug), img: p.img, count: 0, items: [] }))),
}));

export default function ProductsPage() {
  return (
    <section className="bg-soft pt-[calc(var(--hdr)+16px)] pb-5 text-ink">
      <div className="wrap">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-1">
          <div>
            <Breadcrumbs trail={[['Products', '/products']]} />
            <h1 className="font-display-x mt-1 text-[clamp(30px,3.4vw,52px)] leading-[1.02] font-bold tracking-[-0.035em]">
              Every ADK machine, on one screen
            </h1>
          </div>
          <p className="pb-2 text-[15px] text-muted">
            {productTree.length} product lines — hover a line to see its ranges, click to open it.
          </p>
        </div>
        <ProductBrowser lines={lines} />
      </div>
    </section>
  );
}
