import Image from 'next/image';
import { FillText } from '@/components/motion/FillText';
import { ArrowLink } from '@/components/ui/ArrowLink';
import { Parallax } from '@/components/motion/Parallax';

/** Full-bleed factory photo; one sentence on top whose words light up as you scroll. */
export function Statement() {
  return (
    <section className="theme-dark relative isolate flex min-h-[78svh] items-end overflow-hidden text-ink">
      <Parallax className="absolute inset-[-8%_0] -z-10">
        <Image src="/home/hero/cover-line.jpg" alt="ADK press brakes lined up at the factory" fill sizes="100vw" className="object-cover" />
      </Parallax>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,11,13,.35)_0%,rgba(11,11,13,.55)_45%,#0b0b0d_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,13,.85)_0%,rgba(11,11,13,.2)_65%,transparent_100%)]" />

      <div className="wrap py-[clamp(64px,9vw,120px)]">
        <FillText className="font-display-x max-w-[26ch] text-[clamp(24px,2.7vw,42px)] leading-[1.18] font-semibold tracking-[-0.014em]">
          Your machine is your capital. That&apos;s why our relationship never ends at the sale — technical assistance, spare parts and customer care, all over
          India.
        </FillText>
        <div className="mt-8">
          <ArrowLink href="/about-us">More about ADK</ArrowLink>
        </div>
      </div>
    </section>
  );
}
