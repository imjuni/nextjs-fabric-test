import CoordCanvas from '#/app/_canvas/CoordCanvas';
import SubLayout from '#/components/layout/sub-layout';
import { cx } from '#/styled-system/css';
import { h1 } from '#/styled-system/recipes';
import { div } from '#/styled-system/recipes/div';

export default async function Coord() {
  return (
    <SubLayout>
      <div className={cx('section-box', div())}>
        <section>
          <div className={cx('heading-box', div())}>
            <h1 className={h1({ box: 'plain' })}>stroke & left, top 테스트</h1>
          </div>

          <div className={cx('canvas-box', div())}>
            <CoordCanvas />
          </div>
        </section>
      </div>
    </SubLayout>
  );
}
