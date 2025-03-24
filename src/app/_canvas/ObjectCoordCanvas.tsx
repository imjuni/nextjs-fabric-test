'use client';

import { css, cx } from '#/styled-system/css';
import { div } from '#/styled-system/recipes';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const styledOptionBox = css({
  paddingLeft: '1rem',
});

const HomeCanvasDynamic = dynamic(() => import('./CanvasBody'), {
  ssr: false,
});
const HomeJSONEditorDynamic = dynamic(() => import('../_json/JsonEditorBox'), {
  ssr: false,
});

export default function CoordCanvas() {
  return (
    <Suspense>
      <section className={cx('section-box', div())}>
        <div className={cx('canvas-box', div())}>
          <HomeCanvasDynamic type="object-coord" />
        </div>
        <div className={cx('option-box', styledOptionBox, div())}>
          <HomeJSONEditorDynamic />
        </div>
      </section>
    </Suspense>
  );
}
