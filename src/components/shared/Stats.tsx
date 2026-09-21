import clsx from 'clsx';
import { stats } from '@/data/site';
import { Counter } from '@/components/motion/Counter';
import { Reveal } from '@/components/motion/Reveal';

export function Stats() {
  return (
    <div className="mt-[clamp(100px,10vw,150px)] grid border-t border-line md:grid-cols-3">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className={clsx('py-8 max-md:border-b max-md:border-line md:pr-7', i > 0 && 'md:border-l md:border-line md:pl-7')}>
          <div className="font-display-x flex items-start text-[clamp(64px,8.4vw,150px)] leading-[0.9] font-extrabold tracking-[-0.055em]">
            <Counter value={s.value} />
            <sup className="mt-[0.1em] ml-1 text-[0.42em] leading-none text-brand">{s.suffix}</sup>
          </div>
          <p className="mt-3.5 font-mono text-[12.5px] tracking-[0.12em] text-muted uppercase">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
