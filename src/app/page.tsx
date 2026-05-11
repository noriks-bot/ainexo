'use client';

import { FunnelProvider } from '@/context/FunnelContext';
import Funnel from '@/components/Funnel';

export default function Home() {
  return (
    <FunnelProvider>
      <Funnel />
    </FunnelProvider>
  );
}
