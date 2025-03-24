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

export default function ConnectionCanvas() {
  return (
    <Suspense>
      <section className={cx('section-box', div())}>
        <div className={cx('canvas-box', div())}>
          <HomeCanvasDynamic type="object-connection" />
        </div>
        <div className={cx('option-box', styledOptionBox, div())}>
          <HomeJSONEditorDynamic />
        </div>
      </section>
    </Suspense>
  );
}
