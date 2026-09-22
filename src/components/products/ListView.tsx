import { Mail, Phone } from 'lucide-react';
import { childInfo, productHref, type Node } from '@/data/site';
import { tel } from '@/lib/utils';
import { PageHero } from '@/components/shared/PageHero';
import { ProductCard } from '@/components/shared/ProductCard';
import { OtherCategories } from '@/components/shared/OtherCategories';
import { ProductSections } from './ProductSections';
import { Reveal } from '@/components/motion/Reveal';

/** A category or sub-category: its ranges as cards, plus any specs that belong to the range itself. */
export function ListView({ node, parents }: { node: Node; parents: Node[] }) {
  const cards = (node.children ?? []).map(childInfo);
  const parts = (node.parts ?? []).map((p) => ({ name: p.name, img: p.img, href: null }));
  const items = [...cards, ...parts];

  return (
    <>
      <PageHero title={node.title ?? node.name} sub={node.desc?.[0]} />
      <section className="sec bg-white text-ink">
        {node.contact && (
          <div className="wrap mb-9">
            <Reveal className="flex flex-wrap items-center gap-x-7 gap-y-3 rounded-[18px] bg-paper px-[26px] py-5 ring-1 ring-line">
              <p className="mr-auto text-muted">For spares &amp; consumables, reach our dedicated desk</p>
              <a href={`mailto:${node.contact.email}`} className="inline-flex items-center gap-2.5 font-mono text-sm hover:text-brand">
                <Mail className="size-4 text-brand" /> {node.contact.email}
              </a>
              <a href={tel(node.contact.phone)} className="inline-flex items-center gap-2.5 font-mono text-sm hover:text-brand">
                <Phone className="size-4 text-brand" /> {node.contact.phone}
              </a>
            </Reveal>
          </div>
        )}
        <div className="wrap grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-6">
          {items.map((it, i) => (
            <ProductCard key={it.name} item={it} i={i} total={items.length} />
          ))}
        </div>
      </section>
      <ProductSections node={node} />
      <OtherCategories exclude={parents[0]?.slug ?? node.slug} />
    </>
  );
}
