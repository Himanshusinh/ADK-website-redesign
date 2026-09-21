import Image from 'next/image';
import type { ItemInfo } from '@/data/site';
import { pad } from '@/lib/utils';
import { TLink } from '@/components/layout/Transition';
import { QuoteButton } from '@/components/layout/UI';
import { Reveal } from '@/components/motion/Reveal';
import { ArrowLabel } from '@/components/ui/ArrowLink';
import { chipClass } from '@/components/ui/Button';

export function ProductCard({ item, i, total }: { item: ItemInfo; i: number; total: number }) {
  return (
    <Reveal
      delay={(i % 3) * 0.08}
      className="group relative flex flex-col overflow-hidden rounded-[22px] bg-white shadow-[inset_0_0_0_1px_var(--color-line)] transition-[translate,box-shadow] duration-700 ease-expo hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.3)]"
    >
      {item.href && <TLink href={item.href} aria-label={item.name} data-cursor="View" className="absolute inset-0 z-[2]" />}
      <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#fff,#eeede8_80%)]">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-contain p-[18px] transition-[scale] duration-1000 ease-expo group-hover:scale-[1.06]"
        />
      </div>
      <div className="relative flex flex-1 flex-col gap-2.5 border-t border-line p-6 before:absolute before:inset-x-0 before:-top-px before:h-[3px] before:origin-left before:scale-x-0 before:bg-brand before:transition-transform before:duration-700 before:ease-expo group-hover:before:scale-x-100">
        <span className="font-mono text-xs text-muted">
          {pad(i + 1)} / {pad(total)}
        </span>
        <h3 className="mb-2 font-display text-[clamp(21px,1.7vw,26px)] leading-[1.15] font-bold tracking-[-0.02em]">{item.name}</h3>
        <div className="mt-auto flex items-center justify-between gap-3">
          {item.href ? <ArrowLabel>View details</ArrowLabel> : <span className="font-mono text-xs text-muted">Available on request</span>}
          <QuoteButton product={item.name} className={chipClass}>
            Inquiry
          </QuoteButton>
        </div>
      </div>
    </Reveal>
  );
}
