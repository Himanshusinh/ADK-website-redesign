import { Eyebrow } from '@/components/ui/Eyebrow';
import { FillText } from '@/components/motion/FillText';
import { ArrowLink } from '@/components/ui/ArrowLink';

/** One big sentence; its words turn from grey to ink as you scroll. */
export function Statement() {
  return (
    <section className="sec bg-white text-ink">
      <div className="wrap max-w-[1240px]">
        <Eyebrow>Service at ADK</Eyebrow>
        <FillText className="font-display-x text-[clamp(30px,4.2vw,66px)] leading-[1.12] font-bold tracking-[-0.03em]">
          Your machine is your capital. That&apos;s why our relationship never ends at the sale — technical assistance, spare parts and customer care, all over
          India.
        </FillText>
        <div className="mt-10">
          <ArrowLink href="/about-us">More about ADK</ArrowLink>
        </div>
      </div>
    </section>
  );
}
