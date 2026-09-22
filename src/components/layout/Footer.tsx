import Image from 'next/image';
import { Factory, Mail, MapPin, Phone } from 'lucide-react';
import { TLink } from './Transition';
import { QuoteButton } from './UI';
import { BackToTop } from './Dock';
import { company, productHref, productTree } from '@/data/site';
import { tel } from '@/lib/utils';
import { Split } from '@/components/motion/Split';
import { socialIcons } from '@/components/ui/BrandIcons';

const quick = [
  ['Home', '/'], ['About Us', '/about-us'], ['Our Products', '/products'], ['Application', '/application'], ['Gallery', '/gallery'],
  ['News & Events', '/news-and-events'], ['Career', '/career'], ['Clients', '/clients'], ['Contact Us', '/contact-us'],
];
const prods = productTree.map((c) => [c.name, productHref(c.slug)] as const);

const h = 'mb-[18px] block text-[14px] font-semibold text-ink';
const linkCls = 'text-[14.5px] text-ink/65 transition-[color,padding] duration-300 hover:pl-1.5 hover:text-ink';

export function Footer() {
  return (
    <footer className="theme-dark glow relative overflow-hidden pt-[clamp(64px,8vw,110px)] text-ink">
      <div className="wrap flex flex-wrap items-end justify-between gap-10 border-b border-line pb-[clamp(60px,7vw,100px)]">
        <div>
          <Split className="font-display-x max-w-[14ch] text-[clamp(32px,4.2vw,64px)] leading-[1] font-extrabold tracking-[-0.04em]">
            Your machine is your <em className="text-brand not-italic">capital.</em>
          </Split>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <QuoteButton label="Get Your Free Quote" />
          <QuoteButton mode="catalogue" label="Download Catalogue" variant="outline" />
        </div>
      </div>

      <div className="wrap grid gap-10 pt-[70px] pb-[50px] md:grid-cols-2 xl:grid-cols-[1.3fr_.8fr_1.1fr_1.3fr]">
        <div>
          <Image
            src="/adk-logo-light.png"
            alt="ADK Engineering PVT LTD"
            width={1201}
            height={450}
            className="mb-[22px] h-12 w-auto object-contain"
          />
          <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-muted">{company.goal}</p>
          <div className="mt-[26px] flex gap-2.5">
            {company.socials.map((s) => {
              const Icon = socialIcons[s.name as keyof typeof socialIcons];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.name}
                  className="grid size-11 place-items-center rounded-full text-ink/70 ring-1 ring-line transition-[background-color,color,translate] duration-300 hover:-translate-y-1 hover:bg-brand hover:text-white hover:ring-brand"
                >
                  <Icon className="size-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <span className={h}>Quick Links</span>
          <ul className="grid gap-2.5">
            {quick.map(([l, href]) => (
              <li key={href}>
                <TLink href={href} className={linkCls}>
                  {l}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className={h}>Products</span>
          <ul className="grid gap-2.5">
            {prods.map(([l, href]) => (
              <li key={href}>
                <TLink href={href} className={linkCls}>
                  {l}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid content-start gap-4 text-[14.5px] leading-[1.6] text-ink/70">
          <span className={h}>Get In Touch</span>
          <p className="flex gap-3">
            <MapPin className="mt-1 size-[18px] shrink-0 text-brand" />
            <span>
              {company.office.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </span>
          </p>
          <p className="flex gap-3">
            <Factory className="mt-1 size-[18px] shrink-0 text-brand" />
            <span>
              <b className="block font-semibold text-ink">Factory Address:</b>
              {company.factory.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </span>
          </p>
          <a href={tel(company.phone)} className="flex gap-3 hover:text-ink">
            <Phone className="mt-0.5 size-[18px] text-brand" />
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-ink">
            <Mail className="mt-0.5 size-[18px] text-brand" />
            {company.email}
          </a>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center gap-x-[26px] gap-y-3.5 border-t border-line py-[26px]">
        <span className="text-[14px] font-semibold text-ink">Our Branches</span>
        <ul className="flex flex-wrap gap-2">
          {company.branches.map((b) => (
            <li key={b} className="rounded-full px-3.5 py-1.5 text-[13.5px] text-ink/75 ring-1 ring-line">
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap relative flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6 pb-[30px] text-[13.5px] text-muted">
        <p>Copyright © {new Date().getFullYear()} ADK Engineering PVT LTD. All rights reserved.</p>
        <BackToTop />
      </div>
    </footer>
  );
}
