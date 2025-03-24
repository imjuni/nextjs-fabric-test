import ConnectionCanvas from '#/app/_canvas/ConnectionCanvas';
import SubLayout from '#/components/layout/sub-layout';
import { cx } from '#/styled-system/css';
import { h1 } from '#/styled-system/recipes';
import { div } from '#/styled-system/recipes/div';

export default async function PerPixelFindTarget() {
  return (
    <SubLayout>
      <div className={cx('section-box', div())}>
        <section>
          <div className={cx('heading-box', div())}>
            <h1 className={h1({ box: 'plain' })}>Rect, Group Object Polyline Connection Test</h1>
          </div>

          <div className={cx('canvas-box', div())}>
            <ConnectionCanvas />
          </div>
        </section>
      </div>
    </SubLayout>
  );
}
