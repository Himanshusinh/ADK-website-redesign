import { Fragment } from 'react';
import { TLink } from '@/components/layout/Transition';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';

export type Trail = [label: string, href: string][];

export function Breadcrumbs({ trail }: { trail: Trail }) {
  const parts: Trail = [['Home', '/'], ...trail];
  return (
    <nav aria-label="Breadcrumb" className="mb-[26px] flex flex-wrap items-center gap-2 font-mono text-[13px] tracking-[0.06em] text-muted uppercase">
      {parts.map(([label, href], i) =>
        i === parts.length - 1 ? (
          <span key={href} aria-current="page" className="text-brand">
            {label}
          </span>
        ) : (
          <Fragment key={href}>
            <TLink href={href} className="hover:text-ink">
              {label}
            </TLink>
            <span className="opacity-40">/</span>
          </Fragment>
        ),
      )}
    </nav>
  );
}

type Props = { title: string; trail: Trail; kicker?: string; sub?: string };

/** Product-section header: breadcrumb and title on the soft gradient — no banner image. */
export function PageHero({ title, trail, kicker, sub }: Props) {
  return (
    <section className="bg-soft pt-[calc(var(--hdr)+48px)] pb-[clamp(36px,4vw,56px)] text-ink">
      <div className="wrap grid items-end gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Breadcrumbs trail={trail} />
          {kicker && <Eyebrow>{kicker}</Eyebrow>}
          <Split as="h1" chars onLoad delay={0.1} className="font-display-x max-w-[16ch] text-[clamp(44px,6.4vw,108px)] leading-[0.95] font-extrabold tracking-[-0.045em]">
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
