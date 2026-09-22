import clsx from 'clsx';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { TLink } from '@/components/layout/Transition';

export type BtnVariant = 'red' | 'dark' | 'ghost' | 'light' | 'outline';
export type BtnSize = 'md' | 'sm';
export type BtnIcon = 'arrow' | 'download' | 'arrowUR';

const icons = { arrow: ArrowRight, download: Download, arrowUR: ArrowUpRight };

const variants: Record<BtnVariant, string> = {
  red: 'bg-brand text-white before:bg-ink hover:shadow-[0_14px_40px_-12px_rgba(225,37,45,.7)]',
  dark: 'bg-ink text-on-ink before:bg-brand hover:text-white',
  ghost: 'text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.28)] before:bg-white hover:text-ink',
  light: 'bg-white text-ink before:bg-brand hover:text-white',
  outline: 'bg-surface text-ink shadow-[inset_0_0_0_1px_var(--color-line)] before:bg-ink hover:text-on-ink',
};

export function btnClass(variant: BtnVariant = 'red', size: BtnSize = 'md', className?: string) {
  return clsx(
    'group/btn relative isolate inline-flex items-center overflow-hidden rounded-full font-semibold whitespace-nowrap transition-[color,box-shadow] duration-500',
    'before:absolute before:inset-0 before:-z-10 before:translate-y-[101%] before:rounded-full before:transition-transform before:duration-[550ms] before:ease-expo hover:before:translate-y-0',
    size === 'md' ? 'h-[52px] gap-3.5 pr-[7px] pl-6 text-[14.5px]' : 'h-[42px] gap-3 pr-[6px] pl-5 text-[13.5px]',
    variants[variant],
    className,
  );
}

/** Label that rolls up on hover + circular icon that rotates. */
export function BtnBody({ label, icon = 'arrow', size = 'md', variant = 'red' }: { label: string; icon?: BtnIcon; size?: BtnSize; variant?: BtnVariant }) {
  const Icon = icons[icon];
  return (
    <>
      <span className="relative block h-[1.2em] overflow-hidden leading-[1.2em]">
        <span className="block transition-transform duration-[550ms] ease-expo group-hover/btn:-translate-y-full">{label}</span>
        <span aria-hidden className="absolute top-full left-0 block transition-transform duration-[550ms] ease-expo group-hover/btn:-translate-y-full">
          {label}
        </span>
      </span>
      <span
        className={clsx(
          'grid shrink-0 place-items-center rounded-full transition-[rotate,background-color,color] duration-[550ms] ease-expo',
          icon === 'arrow' && 'group-hover/btn:-rotate-45',
          size === 'md' ? 'size-[38px]' : 'size-[30px]',
          variant === 'light' || variant === 'outline' ? 'bg-ink/[.06]' : 'bg-white/15',
          (variant === 'red' || variant === 'ghost' || variant === 'outline') && 'group-hover/btn:bg-brand group-hover/btn:text-white',
          variant === 'dark' && 'group-hover/btn:bg-black/20',
        )}
      >
        <Icon className="size-[18px]" strokeWidth={1.8} />
      </span>
    </>
  );
}

type ButtonProps = {
  label: string;
  href?: string;
  external?: boolean;
  variant?: BtnVariant;
  size?: BtnSize;
  icon?: BtnIcon;
  className?: string;
  magnetic?: boolean;
};

export function Button({ label, href, external, variant = 'red', size = 'md', icon, className, magnetic }: ButtonProps) {
  const cls = btnClass(variant, size, className);
  const body = <BtnBody label={label} icon={icon} size={size} variant={variant} />;
  const mag = magnetic ? '' : undefined;
  if (href && external)
    return (
      <a href={href} target="_blank" rel="noopener" className={cls} data-magnetic={mag}>
        {body}
      </a>
    );
  if (href)
    return (
      <TLink href={href} className={cls} data-magnetic={mag}>
        {body}
      </TLink>
    );
  return (
    <button type="button" className={cls} data-magnetic={mag}>
      {body}
    </button>
  );
}

/** Small outlined pill used for "Inquiry" on cards. */
export const chipClass =
  'relative z-[3] h-[38px] rounded-full px-[18px] text-[13px] font-semibold shadow-[inset_0_0_0_1px_var(--color-line)] transition-[background-color,color,box-shadow] duration-300 hover:bg-brand hover:text-white hover:shadow-none';
