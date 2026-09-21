'use client';

import clsx from 'clsx';
import { useRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';
import { gsap, useGSAP, reducedMotion } from './gsap';

type RevealProps = HTMLAttributes<HTMLElement> & { as?: ElementType; delay?: number; children?: ReactNode };

/** Fades + lifts its content in when scrolled into view. */
export function Reveal({ as: Tag = 'div', className, delay = 0, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }
    gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', delay, scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
  });
  return (
    <Tag ref={ref} className={clsx('reveal', className)} {...rest}>
      {children}
    </Tag>
  );
}

/** Image frame that wipes open from the bottom while the picture settles from a zoom. */
export function RevealImage({ className, children, fill = true }: { className?: string; children: ReactNode; fill?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) {
      gsap.set(el, { clipPath: 'none' });
      return;
    }
    gsap
      .timeline({ scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      .to(el, { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'expo.inOut' })
      .from(inner.current, { scale: 1.3, duration: 1.8, ease: 'expo.out' }, 0);
  });
  return (
    <div ref={ref} className={clsx('reveal-img relative overflow-hidden', className)}>
      <div ref={inner} className={fill ? 'absolute inset-0' : 'relative'}>
        {children}
      </div>
    </div>
  );
}
