import Image from 'next/image';
import type { Metadata } from 'next';
import { Maximize2 } from 'lucide-react';
import { events } from '@/data/site';
import { listImages } from '@/lib/media';
import { PageStart } from '@/components/shared/PageStart';
import { LightboxTrigger } from '@/components/layout/UI';
import { Reveal } from '@/components/motion/Reveal';
import { ArrowLabel } from '@/components/ui/ArrowLink';

export const metadata: Metadata = { title: 'News & Events' };

export default function NewsPage() {
  return (
    <PageStart>
      <section className="sec text-ink">
        <div className="wrap">
          <h1 className="sr-only">News &amp; Events</h1>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => {
              const imgs = listImages(`shared/events/${e.dir}`);
              if (!imgs.length) return null;
              return (
                <Reveal key={e.dir} delay={(i % 3) * 0.08}>
                  <LightboxTrigger images={imgs} cursor="View" label={`View photos of ${e.title}`} className="group flex w-full flex-col gap-4 text-left">
                    <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-paper-2">
                      <Image
                        src={imgs[0]}
                        alt={e.title}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-[scale] duration-1000 ease-expo group-hover:scale-[1.06]"
                      />
                      <span className="absolute bottom-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-[7px] font-mono text-xs text-white backdrop-blur-md">
                        <Maximize2 className="size-3.5" /> {imgs.length} photos
                      </span>
                    </span>
                    <span className="font-display text-[clamp(17px,1.4vw,21px)] leading-[1.15] font-semibold tracking-[-0.012em]">{e.title}</span>
                    <ArrowLabel className="self-start">View photos</ArrowLabel>
                  </LightboxTrigger>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageStart>
  );
}
