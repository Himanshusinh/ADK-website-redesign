import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';

type Props = { title: string; sub?: string };

/** Product-section header: breadcrumb and title on the soft gradient — no banner image. */
export function PageHero({ title, sub }: Props) {
  return (
    <section className="bg-soft pt-[calc(var(--hdr)+48px)] pb-[clamp(36px,4vw,56px)] text-ink">
      <div className="wrap grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Split as="h1" chars onLoad delay={0.1} className="font-display-x max-w-[16ch] text-[clamp(34px,4vw,64px)] leading-[0.95] font-extrabold tracking-[-0.045em]">
            {title}
          </Split>
        </div>
        {sub && (
          <Reveal as="p" className="lead max-w-[480px] text-muted lg:justify-self-end">
            {sub}
          </Reveal>
        )}
      </div>
    </section>
  );
}
