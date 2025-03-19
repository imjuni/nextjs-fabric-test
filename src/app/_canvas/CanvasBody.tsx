'use client';

import { CE_FABRIC_CANVAS_CONFIG } from '#/const-enum/CE_FABRIC_CANVAS_CONFIG';
import { createCoord } from '#/fabric/test-build/createCoord';
import { createPerPixelFindTarget } from '#/fabric/test-build/createPerPixelFindTarget';
import { getInitializor } from '#/fabric/tools/getInitializor';
import { css } from '#/styled-system/css';
import { Suspense, useEffect, useRef } from 'react';

const styledCanvas = css({
  border: '0.2rem solid rgba(33,33,33,0.2)',
});

type TTestType = 'per-pixel-find-target' | 'object-coord';

function createObjectByType(type: TTestType) {
  switch (type) {
    case 'object-coord':
      return getInitializor(createCoord);
    default:
      return getInitializor(createPerPixelFindTarget);
  }
}

export default function CanvasBody({ type }: { type: TTestType }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initializeRef = useRef<boolean>(false);

  useEffect(() => {
    const ref = canvasRef.current;
    const isInit = initializeRef.current;

    if (ref != null && isInit != null && !isInit) {
      initializeRef.current = true;
      createObjectByType(type)({ ref: canvasRef as React.RefObject<HTMLCanvasElement> });
    }
  }, [type]);

  return (
    <Suspense>
      <canvas
        className={styledCanvas}
        style={{
          width: CE_FABRIC_CANVAS_CONFIG.WIDTH,
          height: CE_FABRIC_CANVAS_CONFIG.HEIGHT,
        }}
        ref={canvasRef}
      />
    </Suspense>
  );
}
