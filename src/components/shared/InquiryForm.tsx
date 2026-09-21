'use client';

import clsx from 'clsx';
import { useState, type FormEvent } from 'react';
import { company, productOptions } from '@/data/site';
import { BtnBody, btnClass } from '@/components/ui/Button';

type Props = { mode?: 'quote' | 'catalogue'; product?: string; tone?: 'white' | 'paper' };

const inputCls =
  'peer w-full appearance-none rounded-[14px] border px-4 pt-[26px] pb-2.5 text-[15px] font-medium text-ink outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand focus:shadow-[0_0_0_4px_rgba(225,37,45,.12)]';
const floatCls = 'top-[9px] font-mono text-[11px] tracking-[0.06em] text-brand uppercase';
const labelCls = clsx(
  'pointer-events-none absolute top-[18px] left-[17px] text-[15px] text-muted transition-all duration-200 ease-expo',
  'peer-focus:top-[9px] peer-focus:font-mono peer-focus:text-[11px] peer-focus:tracking-[0.06em] peer-focus:text-brand peer-focus:uppercase',
  'peer-[:not(:placeholder-shown)]:top-[9px] peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:tracking-[0.06em] peer-[:not(:placeholder-shown)]:text-brand peer-[:not(:placeholder-shown)]:uppercase',
);

/**
 * Inquiry form. Posts to /api/inquiry (SMTP). If the server isn't configured
 * for email, it falls back to opening the visitor's mail app pre-filled.
 */
export function InquiryForm({ mode = 'quote', product = '', tone = 'white' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mail'>('idle');
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const options = product && !productOptions.includes(product) ? [product, ...productOptions] : productOptions;

  const surface = (k?: string) =>
    clsx(inputCls, tone === 'paper' ? 'bg-paper' : 'bg-white', k && errors[k] ? 'border-brand' : tone === 'paper' ? 'border-transparent' : 'border-line');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs = { name: !data.name?.trim(), phone: !data.phone?.trim(), email: !/^\S+@\S+\.\S+$/.test(data.email ?? '') };
    setErrors(errs);
    const firstBad = Object.entries(errs).find(([, bad]) => bad)?.[0];
    if (firstBad) {
      form.querySelector<HTMLInputElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    if (mode === 'catalogue') window.open(company.catalogue, '_blank', 'noopener');
    setStatus('sending');
    try {
      const res = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, mode }) });
      if (res.ok) {
        setStatus('sent');
        form.reset();
        return;
      }
    } catch {
      /* fall through to the mail app */
    }
    const subject = `${mode === 'catalogue' ? 'Catalogue Request' : 'Inquiry'}${data.product ? ` – ${data.product}` : ''} (website)`;
    const body = Object.entries(data)
      .filter(([, v]) => v.trim())
      .map(([k, v]) => `${k[0].toUpperCase()}${k.slice(1)}: ${v}`)
      .join('\n');
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mail');
  }

  const field = (name: string, label: string, opts: { type?: string; required?: boolean; full?: boolean } = {}) => (
    <label className={clsx('relative block', opts.full && 'sm:col-span-2')}>
      <input name={name} type={opts.type ?? 'text'} placeholder=" " className={surface(name)} inputMode={opts.type === 'tel' ? 'tel' : undefined} />
      <span className={labelCls}>
        {label}
        {opts.required && ' *'}
      </span>
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-6 grid gap-3.5 sm:grid-cols-2">
        {field('name', 'Your Name', { required: true })}
        {field('company', 'Company Name')}
        {field('phone', 'Phone Number', { type: 'tel', required: true })}
        {field('email', 'Email Address', { type: 'email', required: true })}
        {field('city', 'City')}
        <label className="relative block">
          <select
            name="product"
            defaultValue={product}
            className={clsx(
              surface(),
              "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23e1252d' stroke-width='1.8' fill='none'/%3E%3C/svg%3E\")] bg-[position:right_16px_center] bg-no-repeat pr-10",
            )}
          >
            <option value="">Select a product</option>
            {options.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <span className={clsx('pointer-events-none absolute left-[17px]', floatCls)}>Interested In</span>
        </label>
        <label className="relative block sm:col-span-2">
          <textarea name="message" rows={4} placeholder=" " className={clsx(surface(), 'resize-y')} />
          <span className={labelCls}>Your Requirement</span>
        </label>
      </div>
      <button type="submit" disabled={status === 'sending'} className={btnClass('red', 'md', 'disabled:opacity-70')}>
        <BtnBody label={status === 'sending' ? 'Sending…' : 'Submit'} />
      </button>
      {(status === 'sent' || status === 'mail') && (
        <p role="status" className="mt-[18px] rounded-[14px] bg-[#1faa53]/10 px-[18px] py-4 font-medium text-[#13703a]">
          {status === 'sent'
            ? 'Thank you! Your inquiry has been sent — our team will get back to you shortly.'
            : 'Your email app has opened with the details filled in — just hit send and our team will get back to you shortly.'}
        </p>
      )}
    </form>
  );
}
