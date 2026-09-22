import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';

/** Square photo tile with a gradient caption and a red frame on hover. */
export function Tile({ img, name, index, delay = 0 }: { img: string; name: string; index?: number; delay?: number }) {
  return (
    <Reveal
      as="figure"
      delay={delay}
      className="group relative isolate aspect-square overflow-hidden rounded-[22px] bg-paper-2 after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-45% after:to-[#0b0b0d]/85 before:pointer-events-none before:absolute before:inset-0 before:z-[3] before:rounded-[inherit] before:shadow-[inset_0_0_0_0_#e1252d] before:transition-shadow before:duration-500 hover:before:shadow-[inset_0_0_0_3px_#e1252d]"
    >
      <Image src={img} alt={name} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-[scale] duration-1000 ease-expo group-hover:scale-[1.08]" />
      <figcaption className="absolute inset-x-[22px] bottom-5 z-[2] flex items-baseline gap-3 font-display text-[clamp(17px,1.3vw,20px)] leading-[1.15] font-bold tracking-[-0.02em] text-white">
        {name}
      </figcaption>
    </Reveal>
  );
}
