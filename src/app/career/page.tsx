import Image from 'next/image';
import type { Metadata } from 'next';
import { careers, company } from '@/data/site';
import { PageStart } from '@/components/shared/PageStart';
import { LightboxTrigger } from '@/components/layout/UI';
import { Reveal } from '@/components/motion/Reveal';
import { BtnBody, btnClass } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = { title: 'Career' };

export default function CareerPage() {
  return (
    <PageStart>
      <section className="sec text-ink">
        <div className="wrap">
          <h1 className="sr-only">Career</h1>
          <Eyebrow>We&apos;re hiring</Eyebrow>
          <div className="grid gap-6 md:grid-cols-3">
            {careers.map((j, i) => (
              <Reveal
                key={j.title}
                delay={i * 0.08}
                className="overflow-hidden rounded-[22px] bg-white ring-1 ring-line transition-[translate,box-shadow] duration-700 ease-expo hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,.3)]"
              >
                <LightboxTrigger images={[j.img]} label={`View ${j.title} poster`} cursor="Zoom" className="group relative block aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={j.img}
                    alt={`${j.title} — job opening`}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition-[scale] duration-1000 ease-expo group-hover:scale-[1.04]"
                  />
                </LightboxTrigger>
                <div className="flex items-center justify-between gap-4 px-6 py-[22px]">
                  <h2 className="font-display text-[22px] leading-[1.15] font-bold tracking-[-0.02em]">{j.title}</h2>
                  <a href={`mailto:${company.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`} className={btnClass('red', 'sm')}>
                    <BtnBody label="Apply now" size="sm" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageStart>
  );
}
