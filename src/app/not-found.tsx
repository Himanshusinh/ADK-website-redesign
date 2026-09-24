import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="grid min-h-svh place-items-center bg-paper px-6 text-center text-ink">
      <div>
        <p className="font-display-x text-[clamp(120px,22vw,300px)] leading-none font-semibold tracking-[-0.06em] text-transparent [-webkit-text-stroke:2px_#e1252d]">404</p>
        <h1 className="title-lg mt-4 mb-8">This page was cut from the sheet.</h1>
        <Button href="/" label="Back to home" />
      </div>
    </section>
  );
}
