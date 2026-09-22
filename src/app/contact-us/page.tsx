import type { Metadata } from 'next';
import { ArrowUpRight, Factory, Mail, MapPin, Phone } from 'lucide-react';
import { company, maps } from '@/data/site';
import { tel } from '@/lib/utils';
import { PageStart } from '@/components/shared/PageStart';
import { InquiryForm } from '@/components/shared/InquiryForm';
import { Split } from '@/components/motion/Split';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  const info = [
    { Icon: MapPin, title: 'Address', body: company.office.map((l) => <span key={l} className="block">{l}</span>) },
    { Icon: Factory, title: 'Factory Address', body: company.factory.map((l) => <span key={l} className="block">{l}</span>) },
    { Icon: Phone, title: 'Phone', body: <a href={tel(company.phone)} className="hover:text-brand">{company.phone}</a> },
    { Icon: Mail, title: 'Email', body: <a href={`mailto:${company.email}`} className="hover:text-brand">{company.email}</a> },
  ];
  return (
    <>
      <PageStart>
      <section className="sec bg-white text-ink">
        <div className="wrap grid items-start gap-[clamp(40px,6vw,100px)] lg:grid-cols-2">
          <div>
            <Split as="h1" className="title-xl">Talk to an ADK expert</Split>
            <Reveal as="p" className="lead mt-[22px] mb-9 text-muted">
              Feel free to contact us via phone or email anytime if you have any questions or need help!
            </Reveal>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {info.map(({ Icon, title, body }, i) => (
                <Reveal key={title} delay={(i % 2) * 0.08} className="flex gap-4 rounded-[18px] bg-paper p-[22px] ring-1 ring-line">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="mb-1.5 font-display text-[16.5px] font-semibold">{title}</h3>
                    <p className="text-[14.5px] leading-[1.6] text-muted">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="rounded-[28px] bg-white p-[clamp(26px,3.5vw,48px)] shadow-[0_40px_80px_-40px_rgba(17,17,20,.25)] ring-1 ring-line lg:sticky lg:top-[110px]">
            <h2 className="title-lg mb-[26px]">Send us your requirement</h2>
            <InquiryForm tone="paper" />
          </Reveal>
        </div>
      </section>
      </PageStart>

      <section className="theme-dark glow sec text-ink">
        <div className="wrap">
          <Split className="title-xl">Reach the right team</Split>
          <div className="mt-[50px] mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {company.departments.map((d, i) => (
              <Reveal key={d.title} data-spot delay={i * 0.06} className="spot grid content-start gap-3 rounded-[20px] p-7 ring-1 ring-line">
                <h3 className="mb-2 font-display text-[19px] font-bold">{d.title}</h3>
                {d.phones.map((p) => (
                  <a key={p} href={tel(p)} className="inline-flex items-center gap-2.5 font-mono text-[15px] text-ink/75 hover:text-ink">
                    <Phone className="size-4 text-brand" /> {p}
                  </a>
                ))}
                <a href={`mailto:${d.email}`} className="inline-flex items-center gap-2.5 font-mono text-[15px] break-all text-ink/75 hover:text-ink">
                  <Mail className="size-4 shrink-0 text-brand" /> {d.email}
                </a>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-[26px] gap-y-3.5 border-t border-line pt-[26px]">
            <span className="text-[14px] font-semibold text-ink">Our Branches</span>
            <ul className="flex flex-wrap gap-2">
              {company.branches.map((b) => (
                <li key={b} className="rounded-full bg-surface px-3.5 py-1.5 text-[13.5px] text-ink/75 ring-1 ring-line">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec bg-white text-ink">
        <div className="wrap">
          <Split className="title-xl mb-9">Office &amp; factory</Split>
          <div className="grid gap-5 lg:grid-cols-2">
            {maps.map((m, i) => (
              <Reveal key={m.kicker} delay={i * 0.08} className="overflow-hidden rounded-[24px] bg-paper ring-1 ring-line">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 px-5 py-4">
                  <div>
                    <p className="text-[15px] font-semibold text-ink">{m.kicker}</p>
                    <p className="mt-1 max-w-[46ch] text-[15px] leading-relaxed text-muted">{m.address}</p>
                  </div>
                  <a href={m.link} target="_blank" rel="noopener" className="group inline-flex shrink-0 items-center gap-1.5 text-[15px] font-semibold">
                    Open in Maps
                    <ArrowUpRight className="size-4 text-brand transition-transform duration-500 ease-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <iframe
                  title={`${m.kicker} — ADK Engineering PVT LTD`}
                  src={m.src}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-[300px] w-full border-0 grayscale-[.35] transition-[filter] duration-500 hover:grayscale-0 md:h-[380px]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
