'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HomeCanvasDynamic = dynamic(() => import('./CanvasBody'), {
  ssr: false,
});

export default function HomeCanvas() {
  return (
    <Suspense>
      <HomeCanvasDynamic />
    </Suspense>
  );
}
