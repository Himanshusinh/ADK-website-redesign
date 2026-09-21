'use client';

import clsx from 'clsx';
import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

/**
 * Heading whose colour sweeps in from grey to ink when it scrolls into view.
 * Wrap a word in <span className="accent"> to sweep it in brand red instead.
 */
export function Sweep({ as: Tag = 'h2', className, children }: { as?: ElementType; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setOn(true);
        io.disconnect();
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} data-on={on} className={clsx('sweep', className)}>
      {children}
    </Tag>
  );
}
