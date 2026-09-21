'use client';

import { useRef, type ElementType, type ReactNode } from 'react';
import { gsap, SplitText, useGSAP, reducedMotion } from './gsap';

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** animate letter by letter instead of word by word */
  chars?: boolean;
  delay?: number;
  /** play immediately instead of when scrolled into view */
  onLoad?: boolean;
  id?: string;
};

/** Heading whose words (or letters) rise out of a mask when it enters the viewport. */
export function Split({ as: Tag = 'h2', className, children, chars = false, delay = 0, onLoad = false, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      gsap.set(el, { visibility: 'visible' });
      if (reducedMotion()) return;
      SplitText.create(el, {
        type: chars ? 'words,chars' : 'words',
        mask: 'words',
        wordsClass: 'sw',
        onSplit: (self) =>
          gsap.from(chars ? self.chars : self.words, {
            yPercent: 120,
            duration: chars ? 1.2 : 1.1,
            ease: 'expo.out',
            stagger: chars ? 0.028 : 0.05,
            delay,
            scrollTrigger: onLoad ? undefined : { trigger: el, start: 'top 90%', once: true },
          }),
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} data-split="" className={className}>
      {children}
    </Tag>
  );
}
