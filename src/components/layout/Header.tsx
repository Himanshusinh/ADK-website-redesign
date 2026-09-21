'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Download, Mail, Phone, Plus } from 'lucide-react';
import { TLink } from './Transition';
import { QuoteButton } from './UI';
import { company, moreLinks, navLinks, productHref, productTree } from '@/data/site';
import { pad, tel } from '@/lib/utils';
import { gsap, lenisRef, reducedMotion } from '@/components/motion/gsap';

const LOGO = company.logo;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mega, setMega] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cat, setCat] = useState(0);
  const bar = useRef<HTMLSpanElement>(null);
  const mobile = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lastScroll = useRef(0);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // Real scrolling never opens (or keeps open) the products menu. Only count actual movement:
      // layout re-measures (e.g. images loading) also fire "scroll" without moving the page.
      if (Math.abs(y - last) > 1) {
        lastScroll.current = performance.now();
        clearTimeout(openTimer.current);
        openTimer.current = undefined;
        setMega(false);
      }
      setScrolled(y > 20);
      if (Math.abs(y - last) > 4) setHidden(y > last && y > 400);
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      document.documentElement.classList.toggle('show-top', y > window.innerHeight);
    };
    const close = () => setMenu(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('adk:closemenu', close);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('adk:closemenu', close);
    };
  }, []);

  // close menus whenever the route changes
  useEffect(() => {
    setMega(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (menu) lenisRef.current?.stop();
    else lenisRef.current?.start();
    if (menu && !reducedMotion() && mobile.current)
      gsap.fromTo(mobile.current.querySelectorAll('[data-mlink]'), { yPercent: 110 }, { yPercent: 0, duration: 0.8, ease: 'expo.out', stagger: 0.04, delay: 0.2 });
  }, [menu]);

  /** Hover intent: open only after the pointer really moves over "Products" and rests briefly, never mid-scroll. */
  const requestOpen = () => {
    clearTimeout(closeTimer.current);
    if (mega || openTimer.current) return;
    const y0 = window.scrollY;
    openTimer.current = setTimeout(() => {
      openTimer.current = undefined;
      // Open only if the page is truly at rest: no recent scroll event, the page hasn't moved
      // since the hover began, and the smooth scroller isn't mid-animation.
      const settled =
        performance.now() - lastScroll.current > 400 && Math.abs(window.scrollY - y0) < 2 && !lenisRef.current?.isScrolling;
      if (settled) setMega(true);
    }, 140);
  };
  const requestClose = () => {
    clearTimeout(openTimer.current);
    openTimer.current = undefined;
    closeTimer.current = setTimeout(() => setMega(false), 180);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const isHidden = hidden && !mega && !menu;
  const solid = scrolled || mega || menu;
  const h = scrolled ? 'h-[72px]' : 'h-[var(--hdr)]';

  return (
    <>
      <span aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5">
        <span ref={bar} className="block h-full origin-left bg-brand" style={{ transform: 'scaleX(0)' }} />
      </span>

      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-[60] border-b text-ink transition-[translate,background-color,border-color] duration-500 ease-expo',
          solid ? 'border-line bg-white/90 backdrop-blur-xl' : 'border-transparent',
          isHidden && '-translate-y-full',
        )}
      >
        <div className={clsx('mx-auto flex max-w-[1680px] items-center gap-[clamp(16px,2.4vw,40px)] px-[clamp(18px,4vw,64px)] transition-[height] duration-500 ease-expo', h)}>
          <TLink href="/" aria-label="ADK Engineering & Solutions — Home" className="shrink-0">
            <Image
              src={LOGO}
              alt="ADK Engineering & Solutions"
              width={1201}
              height={450}
              priority
              className={clsx('w-auto object-contain transition-[height] duration-500', scrolled ? 'h-10' : 'h-[44px] md:h-[50px]')}
            />
          </TLink>

          <nav aria-label="Main" className="ml-auto hidden nav:block">
            <ul className="flex gap-[clamp(24px,2.8vw,48px)]">
              {navLinks.map((l) => (
                <li
                  key={l.href}
                  onPointerLeave={l.mega ? requestClose : undefined}
                  onFocus={l.mega ? () => setMega(true) : undefined}
                  onBlur={l.mega ? (e) => !e.currentTarget.contains(e.relatedTarget as Node) && setMega(false) : undefined}
                >
                  <TLink
                    href={l.href}
                    // only the "Products" label itself can open the menu
                    onPointerMove={l.mega ? requestOpen : undefined}
                    className={clsx(
                      'group relative flex items-center gap-1.5 text-[15.5px] font-medium whitespace-nowrap transition-colors',
                      h,
                      isActive(l.href) || (l.mega && mega) ? 'text-ink' : 'text-ink/65 hover:text-ink',
                    )}
                  >
                    {l.label}
                    {l.mega && <ChevronDown className={clsx('size-4 transition-transform duration-300', mega && 'rotate-180')} />}
                    <span
                      className={clsx(
                        'absolute inset-x-0 h-0.5 bg-brand transition-transform duration-500 ease-expo',
                        scrolled ? 'bottom-5' : 'bottom-[26px]',
                        isActive(l.href) ? 'origin-left scale-x-100' : 'origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100',
                      )}
                    />
                  </TLink>
                  {l.mega && <MegaMenu open={mega} cat={cat} setCat={setCat} />}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-4 nav:ml-0">
            <QuoteButton label="Get a Quote" size="sm" className="max-md:hidden" />
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-label={menu ? 'Close menu' : 'Open menu'}
              aria-expanded={menu}
              className="relative size-[46px] rounded-full bg-ink/[.06] nav:hidden"
            >
              <span className={clsx('absolute inset-x-3.5 h-0.5 rounded bg-ink transition-all duration-500 ease-expo', menu ? 'top-[22px] rotate-45' : 'top-[18px]')} />
              <span className={clsx('absolute inset-x-3.5 h-0.5 rounded bg-ink transition-all duration-500 ease-expo', menu ? 'top-[22px] -rotate-45' : 'top-[26px]')} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        ref={mobile}
        data-lenis-prevent
        className={clsx(
          'fixed inset-0 z-[55] flex flex-col justify-between overflow-y-auto bg-white px-[clamp(18px,4vw,64px)] pt-[calc(var(--hdr)+20px)] pb-8 text-ink transition-[clip-path,visibility] duration-700 ease-io nav:hidden',
          menu ? 'visible [clip-path:inset(0_0_0_0)]' : 'invisible [clip-path:inset(0_0_100%_0)]',
        )}
      >
        <nav aria-label="Mobile">
          <MRow>
            <TLink data-mlink href="/" className={mLink}>
              Home
            </TLink>
          </MRow>
          {navLinks.map((l) =>
            l.mega ? (
              <MRow key={l.href}>
                <details className="group">
                  <summary data-mlink className={clsx(mLink, 'list-none [&::-webkit-details-marker]:hidden')}>
                    {l.label}
                    <Plus className="size-7 text-brand transition-transform duration-500 ease-expo group-open:rotate-45" />
                  </summary>
                  <div className="grid gap-1 pb-[18px]">
                    <TLink href="/products" className="py-1.5 text-lg text-muted hover:text-ink">
                      All Products
                    </TLink>
                    {productTree.map((c) => (
                      <TLink key={c.slug} href={productHref(c.slug)} className="py-1.5 text-lg text-muted hover:text-ink">
                        {c.name}
                      </TLink>
                    ))}
                  </div>
                </details>
              </MRow>
            ) : (
              <MRow key={l.href}>
                <TLink data-mlink href={l.href} className={mLink}>
                  {l.label}
                </TLink>
              </MRow>
            ),
          )}
          <div className="grid grid-cols-2 gap-x-6 pt-5">
            {moreLinks.map((l) => (
              <TLink key={l.href} href={l.href} className="py-2 text-lg text-muted hover:text-ink">
                {l.label}
              </TLink>
            ))}
          </div>
        </nav>
        <div className="grid gap-3 pt-7 font-mono text-[15px] text-muted">
          <a href={tel(company.phone)} className="inline-flex items-center gap-2.5">
            <Phone className="size-4 text-brand" /> {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2.5">
            <Mail className="size-4 text-brand" /> {company.email}
          </a>
          <QuoteButton label="Get a Free Quote" className="mt-3 w-full justify-between md:hidden" />
        </div>
      </div>
    </>
  );
}

const mLink = 'flex w-full items-center justify-between py-3.5 font-display text-[clamp(28px,7vw,44px)] leading-[1.1] font-bold tracking-[-0.03em]';
const MRow = ({ children }: { children: React.ReactNode }) => <div className="overflow-hidden border-b border-line">{children}</div>;

function MegaMenu({ open, cat, setCat }: { open: boolean; cat: number; setCat: (i: number) => void }) {
  return (
    <div
      role="region"
      aria-label="Products menu"
      className={clsx(
        'absolute inset-x-0 top-full border-b border-line bg-white shadow-[0_40px_60px_-40px_rgba(17,17,20,.25)] transition-[opacity,translate,visibility] duration-300 ease-expo',
        // closed = fully hidden AND ignores the mouse (nothing inside may override this)
        open ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible -translate-y-2 opacity-0',
      )}
    >
      <div className="mx-auto grid max-w-[1480px] grid-cols-[1.1fr_1fr_1.1fr] gap-12 px-[clamp(18px,4vw,64px)] pt-9 pb-11">
        <ul>
          {productTree.map((c, i) => (
            <li key={c.slug} onMouseEnter={() => setCat(i)} onFocus={() => setCat(i)}>
              <TLink
                href={productHref(c.slug)}
                className={clsx(
                  'flex items-center gap-4 border-b border-line py-3 font-display text-[19px] leading-tight font-semibold tracking-[-0.01em] transition-all duration-300',
                  i === cat ? 'pl-2 text-ink' : 'text-ink/45',
                )}
              >
                <span className="font-mono text-xs font-normal text-muted-d">{pad(i + 1)}</span>
                {c.name}
                <ArrowRight className={clsx('ml-auto size-4 text-brand transition-all duration-500 ease-expo', i === cat ? 'opacity-100' : '-translate-x-2.5 opacity-0')} />
              </TLink>
            </li>
          ))}
        </ul>

        {/* panels stacked in one grid cell so the box grows to the tallest list instead of overflowing */}
        <div className="grid">
          {productTree.map((c, i) => {
            const links = c.children?.length
              ? c.children.map((s2) => ({ name: s2.name, href: productHref(s2.slug) }))
              : (c.parts ?? []).map((part) => ({ name: part.name, href: productHref(c.slug) }));
            if (!links.length) links.push({ name: `View ${c.name}`, href: productHref(c.slug) });
            return (
              <div
                key={c.slug}
                className={clsx(
                  'col-start-1 row-start-1 transition-[opacity,translate,visibility] duration-300 ease-expo',
                  // no forced `visible` here: it must inherit "hidden" when the whole menu is closed
                  i === cat ? 'opacity-100' : 'pointer-events-none invisible translate-y-2 opacity-0',
                )}
              >
                <p className="mb-[18px] font-mono text-[13px] tracking-[0.12em] text-brand uppercase">{c.name}</p>
                <ul className={clsx('mb-7', links.length > 6 && 'columns-2 gap-x-8')}>
                  {links.map((l) => (
                    <li key={l.name} className="break-inside-avoid">
                      <TLink href={l.href} className="block py-[9px] text-[17px] text-ink/70 transition-[color,translate] duration-300 hover:translate-x-1.5 hover:text-ink">
                        {l.name}
                      </TLink>
                    </li>
                  ))}
                </ul>
                <TLink href={productHref(c.slug)} className="inline-flex items-center gap-2 text-base font-semibold text-ink">
                  Explore range <ArrowRight className="size-4 text-brand" />
                </TLink>
              </div>
            );
          })}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-paper ring-1 ring-line">
          {productTree.map((c, i) => (
            <Image
              key={c.slug}
              src={c.img}
              alt=""
              fill
              sizes="30vw"
              className={clsx('object-contain p-5 mix-blend-multiply transition-opacity duration-300', i === cat ? 'opacity-100' : 'opacity-0')}
            />
          ))}
          <QuoteButton
            mode="catalogue"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            <Download className="size-4" /> Download Catalogue
          </QuoteButton>
        </div>
      </div>
    </div>
  );
}
