'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Mail, Phone, X } from 'lucide-react';
import { company } from '@/data/site';
import { tel } from '@/lib/utils';
import { lenisRef } from '@/components/motion/gsap';
import { InquiryForm } from '@/components/shared/InquiryForm';
import { BtnBody, btnClass, type BtnIcon, type BtnSize, type BtnVariant } from '@/components/ui/Button';

type Mode = 'quote' | 'catalogue';
type UIApi = {
  openQuote: (o?: { product?: string; mode?: Mode }) => void;
  openLightbox: (images: string[], index?: number) => void;
};

const Ctx = createContext<UIApi | null>(null);

export function useUI() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useUI must be used inside <UIProvider>');
  return c;
}

/** Hosts the quote drawer and the image lightbox for the whole site. */
export function UIProvider({ children }: { children: ReactNode }) {
  const [quote, setQuote] = useState({ open: false, mode: 'quote' as Mode, product: '', key: 0 });
  const [lb, setLb] = useState<{ images: string[]; index: number } | null>(null);

  const openQuote = useCallback((o: { product?: string; mode?: Mode } = {}) => {
    window.dispatchEvent(new Event('adk:closemenu'));
    setQuote((q) => ({ open: true, mode: o.mode ?? 'quote', product: o.product ?? '', key: q.key + 1 }));
  }, []);
  const openLightbox = useCallback((images: string[], index = 0) => setLb({ images, index }), []);
  const closeQuote = useCallback(() => setQuote((q) => ({ ...q, open: false })), []);
  const step = useCallback((n: number) => setLb((s) => (s ? { ...s, index: (s.index + n + s.images.length) % s.images.length } : s)), []);

  const locked = quote.open || !!lb;
  useEffect(() => {
    if (locked) lenisRef.current?.stop();
    else lenisRef.current?.start();
    document.documentElement.style.overflow = locked ? 'hidden' : '';
  }, [locked]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLb(null);
        closeQuote();
      }
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeQuote, step]);

  const api = useMemo(() => ({ openQuote, openLightbox }), [openQuote, openLightbox]);

  return (
    <Ctx.Provider value={api}>
      {children}

      {/* quote drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!quote.open}
        aria-labelledby="quote-title"
        className={clsx('fixed inset-0 z-[200]', quote.open ? 'visible' : 'invisible transition-[visibility] delay-700')}
      >
        <div
          onClick={closeQuote}
          className={clsx('absolute inset-0 bg-[rgba(8,8,10,.6)] backdrop-blur-sm transition-opacity duration-500', quote.open ? 'opacity-100' : 'opacity-0')}
        />
        <div
          data-lenis-prevent
          className={clsx(
            'absolute inset-y-0 right-0 w-full max-w-[600px] overflow-y-auto bg-paper p-[clamp(28px,4vw,56px)] text-ink transition-transform duration-700 ease-io',
            quote.open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <button
            type="button"
            onClick={closeQuote}
            aria-label="Close"
            className="absolute top-5 right-5 grid size-12 place-items-center rounded-full bg-ink text-white transition-[rotate,background-color] duration-500 ease-expo hover:rotate-90 hover:bg-brand"
          >
            <X className="size-5" />
          </button>
          <h2 id="quote-title" className="font-display-x mb-[18px] pr-16 text-[clamp(24px,2.4vw,34px)] leading-none font-semibold tracking-[-0.016em]">
            {quote.mode === 'catalogue' ? 'Catalogue Request Form…!' : 'Get Your Free Quote…!'}
          </h2>
          <div className="mb-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] text-muted">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-brand">
              <Mail className="size-4 text-brand" /> {company.email}
            </a>
            <a href={tel(company.phone)} className="inline-flex items-center gap-2 hover:text-brand">
              <Phone className="size-4 text-brand" /> {company.phone}
            </a>
          </div>
          <InquiryForm key={quote.key} mode={quote.mode} product={quote.product} />
        </div>
      </div>

      {/* lightbox */}
      {lb && (
        <div
          role="dialog"
          aria-label="Image viewer"
          className="fixed inset-0 z-[210] grid place-items-center bg-white/95 backdrop-blur-md"
          onClick={(e) => e.target === e.currentTarget && setLb(null)}
        >
          <div className="pointer-events-none relative h-[80vh] w-[86vw]">
            <Image key={lb.images[lb.index]} src={lb.images[lb.index]} alt="" fill sizes="86vw" className="animate-lb rounded-xl object-contain" />
          </div>
          <button type="button" onClick={() => setLb(null)} aria-label="Close" className={lbBtn('top-5 right-5')}>
            <X className="size-5" />
          </button>
          {lb.images.length > 1 && (
            <>
              <button type="button" onClick={() => step(-1)} aria-label="Previous" className={lbBtn('left-5')}>
                <ArrowLeft className="size-5" />
              </button>
              <button type="button" onClick={() => step(1)} aria-label="Next" className={lbBtn('right-5')}>
                <ArrowRight className="size-5" />
              </button>
            </>
          )}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-sm text-muted">
            {lb.index + 1} / {lb.images.length}
          </p>
        </div>
      )}
    </Ctx.Provider>
  );
}

const lbBtn = (pos: string) =>
  clsx('absolute grid size-[54px] place-items-center rounded-full bg-ink/[.06] text-ink transition-colors hover:bg-brand hover:text-white', pos);

type QuoteButtonProps = {
  product?: string;
  mode?: Mode;
  label?: string;
  variant?: BtnVariant;
  size?: BtnSize;
  icon?: BtnIcon;
  className?: string;
  magnetic?: boolean;
  /** custom content — renders an unstyled button with `className` */
  children?: ReactNode;
  ariaLabel?: string;
};

/** Any button that opens the quote / catalogue drawer. */
export function QuoteButton({ product, mode = 'quote', label, variant = 'red', size = 'md', icon, className, magnetic, children, ariaLabel }: QuoteButtonProps) {
  const { openQuote } = useUI();
  const onClick = () => openQuote({ product, mode });
  if (children)
    return (
      <button type="button" onClick={onClick} className={className} aria-label={ariaLabel}>
        {children}
      </button>
    );
  return (
    <button type="button" onClick={onClick} className={btnClass(variant, size, className)} data-magnetic={magnetic ? '' : undefined}>
      <BtnBody label={label ?? 'Get a Quote'} icon={icon ?? (mode === 'catalogue' ? 'download' : 'arrow')} size={size} variant={variant} />
    </button>
  );
}

/** Button that opens a set of images in the lightbox. */
export function LightboxTrigger({ images, index = 0, className, children, label, cursor }: { images: string[]; index?: number; className?: string; children: ReactNode; label?: string; cursor?: string }) {
  const { openLightbox } = useUI();
  return (
    <button type="button" aria-label={label} data-cursor={cursor} className={className} onClick={() => openLightbox(images, index)}>
      {children}
    </button>
  );
}
