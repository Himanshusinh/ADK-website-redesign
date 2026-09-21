import { HeroShelf } from '@/components/home/HeroShelf';
import { Explorer } from '@/components/home/Explorer';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { Statement } from '@/components/home/Statement';
import { Industries } from '@/components/home/Industries';
import { ClientsStrip } from '@/components/home/ClientsStrip';

export default function Home() {
  return (
    <>
      <HeroShelf />
      <Explorer />
      <WhatWeDo />
      <Statement />
      <Industries />
      <ClientsStrip />
    </>
  );
}
