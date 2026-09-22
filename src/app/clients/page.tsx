import type { Metadata } from 'next';
import { listImages } from '@/lib/media';
import { PageStart } from '@/components/shared/PageStart';
import { LogoTile } from '@/components/home/ClientsStrip';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = { title: 'Clients' };

export default function ClientsPage() {
  const logos = listImages('images/clients');
  return (
    <PageStart>
      <section className="sec text-ink">
        <div className="wrap">
          <h1 className="sr-only">Clients</h1>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-4">
            {logos.map((src, i) => (
              <Reveal key={src} delay={(i % 6) * 0.04}>
                <LogoTile src={src} className="w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageStart>
  );
}
