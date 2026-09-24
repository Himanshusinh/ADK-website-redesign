'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { gsap, useGSAP, reducedMotion } from '@/components/motion/gsap';

type Props = { img: string; value: string; label: string };

/**
 * Scroll reveal: the headline figure is cut out of a black sheet with the cutting photo behind it.
 * As you scroll the cut-out opens up until the photo fills the screen and the caption lands on top.
 */
export function RevealNumber({ img, value, label }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const text = useRef<SVGTextElement>(null);
  const cap = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const sheet = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      if (!wrap.current || reducedMotion()) return;
      // the sticky pane only holds for (section height - 100vh), so finish the reveal well before that
      const st = { trigger: wrap.current, start: 'top top', end: '52% top', scrub: 0.35 };
      // svgOrigin keeps the glyph growing from the middle of the viewBox (transform-box is unreliable on <text>)
      gsap.fromTo(text.current, { scale: 1 }, { scale: 60, svgOrigin: '720 450', ease: 'power2.in', scrollTrigger: st });
      // the glyph's counters would stay black however far it zooms, so lift the whole sheet at the end
      gsap.fromTo(
        sheet.current,
        { autoAlpha: 1 },
        { autoAlpha: 0, ease: 'power2.out', scrollTrigger: { trigger: wrap.current, start: '34% top', end: '48% top', scrub: 0.35 } },
      );
      gsap.fromTo(photo.current, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: st });
      gsap.fromTo(
        cap.current,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, ease: 'power2.out', scrollTrigger: { trigger: wrap.current, start: '38% top', end: '54% top', scrub: 0.35 } },
      );
    },
    { scope: wrap },
  );

  return (
    <>
      {/* desktop: the scroll reveal */}
      <section ref={wrap} className="relative hidden h-[260vh] bg-[#0b0b0d] md:block">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div ref={photo} className="absolute inset-0 will-change-transform">
            <Image src={img} alt={`${label} ${value}`} fill sizes="100vw" className="object-cover" />
          </div>

          {/* black sheet with the figure cut out of it */}
          <svg ref={sheet} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
            <defs>
              <mask id="figure-mask">
                <rect width="1440" height="900" fill="#fff" />
                <text
                  ref={text}
                  x="720"
                  y="450"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#000"
                  style={{ fontFamily: 'var(--font-display), sans-serif', fontWeight: 800, fontSize: 250, letterSpacing: '-0.04em' }}
                >
                  {value}
                </text>
              </mask>
            </defs>
            <rect width="1440" height="900" fill="#0b0b0d" mask="url(#figure-mask)" />
          </svg>

          <div ref={cap} className="invisible absolute inset-x-0 top-[18%] text-center">
            <p className="text-[clamp(15px,1.5vw,22px)] font-medium text-white/85">{label}</p>
            <p className="font-display-x mt-2 text-[clamp(44px,6vw,96px)] leading-none font-extrabold tracking-[-0.04em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,.6)]">
              {value}
            </p>
          </div>
        </div>
      </section>

      {/* phones: the same picture, caption on top — no pinning */}
      <section className="relative h-[70svh] overflow-hidden bg-[#0b0b0d] md:hidden">
        <Image src={img} alt={`${label} ${value}`} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-x-0 top-[12%] text-center">
          <p className="text-[15px] font-medium text-white/85">{label}</p>
          <p className="font-display-x mt-1.5 text-[clamp(40px,13vw,72px)] leading-none font-extrabold tracking-[-0.04em] text-white">{value}</p>
        </div>
      </section>
    </>
  );
}
