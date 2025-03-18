'use client';

import { CE_FABRIC_CANVAS_CONFIG } from '#/const-enum/CE_FABRIC_CANVAS_CONFIG';
import { createFabric } from '#/fabric/createFabric';
import { css } from '#/styled-system/css';
import { Suspense, useEffect, useRef } from 'react';

const styledCanvas = css({
  border: '0.2rem solid rgba(33,33,33,0.2)',
});

export default function CanvasBody() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initializeRef = useRef<boolean>(false);

  useEffect(() => {
    const ref = canvasRef.current;
    const isInit = initializeRef.current;

    if (ref != null && isInit != null && !isInit) {
      initializeRef.current = true;
      createFabric({ ref: canvasRef as React.RefObject<HTMLCanvasElement> });
    }
  }, []);

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
