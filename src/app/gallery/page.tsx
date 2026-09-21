import Image from 'next/image';
import type { Metadata } from 'next';
import { listImages } from '@/lib/media';
import { PageStart } from '@/components/shared/PageStart';
import { LightboxTrigger } from '@/components/layout/UI';
import { Reveal } from '@/components/motion/Reveal';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryPage() {
  const imgs = listImages('images/gallery');
  return (
    <PageStart>
      <section className="sec text-ink">
        <div className="wrap">
          <h1 className="sr-only">Gallery</h1>
          <Eyebrow>{imgs.length} photos</Eyebrow>
          <div className="columns-1 gap-[18px] sm:columns-2 lg:columns-3">
            {imgs.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.06} className="mb-[18px] break-inside-avoid">
                <LightboxTrigger
                  images={imgs}
                  index={i}
                  label={`Open photo ${i + 1}`}
                  cursor="Zoom"
                  className="group block w-full overflow-hidden rounded-[18px] bg-white ring-1 ring-line"
                >
                  <Image
                    src={src}
                    alt={`ADK gallery photo ${i + 1}`}
                    width={800}
                    height={571}
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="h-auto w-full transition-[scale] duration-1000 ease-expo group-hover:scale-105"
                  />
                </LightboxTrigger>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageStart>
  );
}
