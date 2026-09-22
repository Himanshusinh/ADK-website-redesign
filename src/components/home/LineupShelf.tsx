import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { lineup } from '@/data/site';
import { TLink } from '@/components/layout/Transition';

/** Right under the dark hero: every machine family on one light shelf, one click from its range. */
export function LineupShelf() {
  return (
    <section className="bg-soft relative pt-[clamp(56px,9vh,96px)] pb-[clamp(8px,2vh,24px)] text-ink">
      <div className="wrap mb-[clamp(28px,5vh,48px)] flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="title-lg">Pick a machine family</h2>
        </div>
        <TLink href="/products" className="group inline-flex items-center gap-1.5 text-[15px] font-semibold">
          All products
          <ArrowUpRight className="size-4 text-brand transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </TLink>
      </div>
      <ul className="wrap grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-6 md:gap-x-6">
        {lineup.map((m) => (
          <li key={m.name}>
            <TLink href={m.href} className="group block text-center">
              <span className="relative block aspect-[4/3]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  sizes="(min-width:768px) 16vw, 45vw"
                  className="object-contain mix-blend-multiply transition-transform duration-500 ease-expo group-hover:-translate-y-2 group-hover:scale-[1.04]"
                />
              </span>
              <span className="mt-3 block h-px bg-line transition-colors duration-300 group-hover:bg-brand" />
              <span className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold md:text-base">
                {m.name}
                <ArrowUpRight className="size-4 -translate-x-1 text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </span>
            </TLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
