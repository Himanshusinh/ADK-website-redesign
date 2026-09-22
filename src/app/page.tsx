import { HeroStage } from '@/components/home/HeroStage';
import { LineupShelf } from '@/components/home/LineupShelf';
import { Explorer } from '@/components/home/Explorer';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { Statement } from '@/components/home/Statement';
import { Industries } from '@/components/home/Industries';
import { ClientsStrip } from '@/components/home/ClientsStrip';

export default function Home() {
  return (
    <>
      <HeroStage />
      <LineupShelf />
      <Explorer />
      <WhatWeDo />
      <Statement />
      <Industries />
      <ClientsStrip />
    </>
  );
}
