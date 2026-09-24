import clsx from 'clsx';
import { Check, X } from 'lucide-react';
import type { Compare, Table } from '@/data/site';
import { Reveal } from '@/components/motion/Reveal';

const cell = 'border-b border-line px-5 py-4 text-[#333] tabular-nums transition-colors group-hover/row:bg-[#fff1f1] group-[:last-child]/row:border-b-0';
const rowHead =
  'sticky left-0 z-[1] border-b border-line bg-[#faf9f6] px-5 py-4 text-left font-semibold text-ink shadow-[1px_0_0_var(--color-line)] transition-colors group-hover/row:bg-[#fff1f1] group-[:last-child]/row:border-b-0';
const frame = 'overflow-x-auto rounded-[20px] bg-white shadow-[inset_0_0_0_1px_var(--color-line)]';

export function SpecTable({ t }: { t: Table }) {
  const cols = t.head ? t.head.length : Math.max(...t.rows.map((r) => r.length));
  const kv = cols === 2;
  return (
    <Reveal className={clsx('w-full min-w-0', kv && 'mx-auto max-w-[960px]')}>
      <div className={clsx('mb-[22px] flex flex-wrap items-end gap-5', kv ? 'justify-center text-center' : 'justify-between')}>
        <h2 className={kv ? 'title-xl' : 'title-lg'}>{t.title}</h2>
        {cols > 3 && <span className="text-[13px] text-muted">Swipe to see all models →</span>}
      </div>
      <div className={frame} data-lenis-prevent>
        <table className={clsx('w-full border-separate border-spacing-0 text-[15px]', !kv && 'min-w-[640px]')}>
          {t.head && (
            <thead>
              <tr>
                {t.head.map((h, i) => (
                  <th
                    key={h}
                    scope="col"
                    className={clsx('px-5 py-4 text-left font-mono text-xs font-medium tracking-[0.06em] whitespace-nowrap text-white uppercase', i === 0 ? 'bg-brand' : 'bg-ink')}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {t.rows.map(([label, ...vals]) => (
              <tr key={label} className="group/row">
                <th scope="row" className={clsx(rowHead, kv ? 'w-2/5' : 'whitespace-nowrap')}>
                  {label}
                </th>
                {vals.length === 1 && cols > 2 ? (
                  <td colSpan={cols - 1} className={cell}>
                    {vals[0]}
                  </td>
                ) : (
                  vals.map((v, i) => (
                    <td key={i} className={cell}>
                      {v}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}

export function CompareTable({ c }: { c: Compare }) {
  return (
    <Reveal className="w-full min-w-0">
      <h2 className="title-lg mb-[22px]">{c.title}</h2>
      <div className={frame}>
        <table className="w-full border-separate border-spacing-0 text-[15px]">
          <thead>
            <tr>
              {c.head.map((h, i) => (
                <th key={h} scope="col" className={clsx('px-5 py-4 font-mono text-xs font-medium tracking-[0.06em] text-white uppercase', i === 0 ? 'bg-brand text-left' : 'bg-ink text-center')}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={r} className="group/row">
                <th scope="row" className={rowHead}>
                  {r}
                </th>
                <td className={clsx(cell, 'text-center')}>
                  <span className="inline-grid size-8 place-items-center rounded-full bg-[#1faa53]/12 text-[#1a8f47]">
                    <Check className="size-4" />
                  </span>
                </td>
                <td className={clsx(cell, 'text-center')}>
                  <span className="inline-grid size-8 place-items-center rounded-full bg-brand/10 text-brand">
                    <X className="size-4" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[13px] text-muted">{c.note}</p>
    </Reveal>
  );
}
