'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { useUI } from '@/components/layout/UI';
import { Reveal } from '@/components/motion/Reveal';

export function ProductGallery({ imgs, name }: { imgs: string[]; name: string }) {
  const [cur, setCur] = useState(0);
  const { openLightbox } = useUI();
  return (
    <Reveal>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_50%_42%,#fff_0%,#e9e8e3_70%,#d8d6cf_100%)]">
        <span
          aria-hidden
          className="font-display-x pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(120px,18vw,300px)] leading-none font-semibold tracking-[-0.06em] text-ink/[.045]"
        >
          ADK
        </span>
        {imgs.map((src, k) => (
          <button
            key={src}
            type="button"
            onClick={() => openLightbox(imgs, k)}
            aria-label={`View ${name} full screen`}
            tabIndex={k === cur ? 0 : -1}
            className={clsx(
              'absolute inset-0 cursor-zoom-in transition-[opacity,scale] duration-700 ease-expo',
              k === cur ? 'scale-100 opacity-100' : 'pointer-events-none scale-[.96] opacity-0',
            )}
          >
            <Image src={src} alt={k ? `${name} view ${k + 1}` : name} fill preload={k === 0} sizes="(min-width:1024px) 55vw, 100vw" className="object-contain p-[clamp(16px,3vw,40px)]" />
          </button>
        ))}
        <button
          type="button"
          onClick={() => openLightbox(imgs, cur)}
          aria-label="View full screen"
          className="absolute right-4 bottom-4 z-[2] grid size-[46px] place-items-center rounded-full bg-ink text-white transition-colors hover:bg-brand"
        >
          <Maximize2 className="size-[18px]" />
        </button>
      </div>
      {imgs.length > 1 && (
        <div className="no-scrollbar mt-3.5 flex gap-2.5 overflow-x-auto p-0.5">
          {imgs.map((src, k) => (
            <button
              key={src}
              type="button"
              onClick={() => setCur(k)}
              aria-label={`Image ${k + 1}`}
              className={clsx(
                'relative size-[86px] shrink-0 overflow-hidden rounded-[14px] bg-[#eeede8] outline-2 -outline-offset-2 transition-[opacity,outline-color] duration-300',
                k === cur ? 'opacity-100 outline-brand' : 'opacity-55 outline-transparent hover:opacity-100',
              )}
            >
              <Image src={src} alt="" fill sizes="86px" className="object-contain p-1.5" />
            </button>
          ))}
        </div>
      )}
    </Reveal>
  );
}
