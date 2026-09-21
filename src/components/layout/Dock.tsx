'use client';

import { ArrowUp } from 'lucide-react';
import { company } from '@/data/site';
import { scrollToTop } from '@/components/motion/gsap';
import { WhatsAppIcon } from '@/components/ui/BrandIcons';

/** The only floating control: WhatsApp, bottom-right. */
export function Dock() {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${company.whatsapp}`}
      target="_blank"
      rel="noopener"
      aria-label="Chat with ADK on WhatsApp"
      className="group fixed right-5 bottom-5 z-[45] flex items-center gap-2 rounded-full bg-[#1faa53] p-3.5 text-white shadow-[0_12px_28px_-10px_rgba(31,170,83,.7)] transition-[background-color,scale] duration-300 hover:scale-105 hover:bg-[#178a43] md:right-7 md:bottom-7"
    >
      <WhatsAppIcon className="size-6" />
      <span className="max-w-0 overflow-hidden text-[15px] font-semibold whitespace-nowrap transition-[max-width,padding] duration-500 ease-expo group-hover:max-w-[160px] group-hover:pr-1.5">
        Chat with us
      </span>
    </a>
  );
}

export function BackToTop() {
  return (
    <button type="button" onClick={scrollToTop} className="group inline-flex items-center gap-2 font-semibold text-ink">
      Back to top <ArrowUp className="size-4 text-brand transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
