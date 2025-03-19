'use client';

import { fabricStore } from '#/components/state/fabric-state';
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

export default function HomeCanvas() {
  const { isShowClickPos, toggle } = fabricStore();

  return (
    <Suspense>
      <section className={cx('section-box', div())}>
        <div className={cx('canvas-box', div())}>
          <HomeCanvasDynamic type="per-pixel-find-target" />
        </div>
        <div className={cx('option-box', div(), styledOptionBox)}>
          <p onClick={() => toggle()}>
            <input type="checkbox" checked={isShowClickPos} onChange={() => toggle()} />
            <span>클릭 지점 보기</span>
          </p>
        </div>
      </section>
    </Suspense>
  );
}
