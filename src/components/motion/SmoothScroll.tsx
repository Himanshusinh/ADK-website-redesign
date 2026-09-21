'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, lenisRef, reducedMotion } from './gsap';

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // lazy images change page height after triggers are measured — re-measure when that happens
    let lastH = 0;
    let rt: ReturnType<typeof setTimeout> | undefined;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (Math.abs(h - lastH) < 2) return;
      lastH = h;
      clearTimeout(rt);
      rt = setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    ro.observe(document.body);

    if (reducedMotion()) return () => ro.disconnect();

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      ro.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // new page: jump to top (the transition curtain hides the jump)
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
