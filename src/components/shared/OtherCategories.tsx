import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { productHref, productTree } from '@/data/site';
import { TLink } from '@/components/layout/Transition';
import { Eyebrow } from '@/components/ui/Eyebrow';

/** Swipeable rail of the other product lines, shown at the bottom of product pages. */
export function OtherCategories({ exclude }: { exclude?: string }) {
  const list = productTree.filter((c) => c.slug !== exclude);
  return (
    <section className="sec bg-white text-ink">
      <div className="wrap mb-[30px]">
        <Eyebrow>Keep exploring</Eyebrow>
        <h2 className="title-lg">Other product lines</h2>
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(18px,4vw,64px)] pt-1 pb-5 [scrollbar-width:thin]" data-lenis-prevent>
        {list.map((c) => (
          <TLink
            key={c.slug}
            href={productHref(c.slug)}
            className="group relative grid w-[260px] shrink-0 snap-start gap-3 rounded-[18px] bg-paper px-4 pt-4 pb-[18px] transition-[background-color,translate] duration-500 ease-expo hover:-translate-y-1 hover:bg-paper-2"
          >
            <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-white">
              <Image src={c.img} alt="" fill sizes="260px" className="object-contain p-2.5 mix-blend-multiply" />
            </span>
            <span className="pr-8 font-display text-base leading-tight font-semibold">{c.name}</span>
            <ArrowUpRight className="absolute right-4 bottom-5 size-5 text-brand transition-transform duration-500 ease-expo group-hover:rotate-45" />
          </TLink>
        ))}
      </div>
    </section>
  );
}
