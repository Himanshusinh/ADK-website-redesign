import Image from 'next/image';
import { listImages, logoName } from '@/lib/media';
import { Button } from '@/components/ui/Button';
import { Sweep } from '@/components/motion/Sweep';
import { Marquee } from '@/components/motion/Marquee';

export function LogoTile({ src, className = 'w-[190px]' }: { src: string; className?: string }) {
  return (
    <span
      className={`group grid aspect-[2/1] shrink-0 place-items-center rounded-2xl bg-white p-3.5 shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow,translate] duration-500 hover:-translate-y-0.5 hover:shadow-[inset_0_0_0_1px_#e1252d,0_14px_30px_-18px_rgba(0,0,0,.3)] ${className}`}
    >
      <Image src={src} alt={logoName(src)} width={200} height={100} className="h-full w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
    </span>
  );
}

export function ClientsStrip() {
  const logos = listImages('images/clients');
  const half = Math.ceil(logos.length / 2);
  return (
    <section className="sec bg-white text-ink">
      <div className="wrap mb-[clamp(40px,5vw,70px)] max-w-[900px] text-center">
        <Sweep className="title-xl">
          750+ happy customers, from job shops to <span className="accent">ISRO</span>
        </Sweep>
      </div>
      <div className="mb-[60px] grid gap-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <Marquee speed={0.6} pauseOnHover>
          {logos.slice(0, half).map((src) => (
            <LogoTile key={src} src={src} />
          ))}
        </Marquee>
        <Marquee speed={0.6} reverse pauseOnHover>
          {logos.slice(half).map((src) => (
            <LogoTile key={src} src={src} />
          ))}
        </Marquee>
      </div>
      <div className="wrap text-center">
        <Button href="/clients" label="View all clients" variant="dark" />
      </div>
    </section>
  );
}
