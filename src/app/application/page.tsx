import type { Metadata } from 'next';
import { applications } from '@/data/site';
import { PageStart } from '@/components/shared/PageStart';
import { Tile } from '@/components/shared/Tile';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata: Metadata = { title: 'Application' };

export default function ApplicationPage() {
  return (
    <PageStart>
      <section className="sec text-ink">
        <div className="wrap">
          <h1 className="sr-only">Application</h1>
          <Eyebrow>{applications.length} industries where ADK machines are at work</Eyebrow>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-[18px]">
            {applications.map((a, i) => (
              <Tile key={a.name} img={a.img} name={a.name} index={i} delay={(i % 4) * 0.06} />
            ))}
          </div>
        </div>
      </section>
    </PageStart>
  );
}
