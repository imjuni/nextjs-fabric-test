'use client';

import { css, cx } from '#/styled-system/css';
import { div } from '#/styled-system/recipes';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const styledOptionBox = css({
  padding: '5rem',
  '& > p > input': {
    marginRight: '0.5rem',
  },
  '& > p > span': {
    userSelect: 'none',
    cursor: 'default',
  },
});

const HomeCanvasDynamic = dynamic(() => import('./CanvasBody'), {
  ssr: false,
});

export default function CoordCanvas() {
  return (
    <Suspense>
      <section className={cx('section-box', div())}>
        <div className={cx('canvas-box', div())}>
          <HomeCanvasDynamic type="object-coord" />
        </div>
        <div className={cx('option-box', div(), styledOptionBox)}></div>
      </section>
    </Suspense>
  );
}
