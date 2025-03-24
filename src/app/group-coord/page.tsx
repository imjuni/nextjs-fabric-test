import GroupCoordCanvas from '#/app/_canvas/GroupCoordCanvas';
import SubLayout from '#/components/layout/sub-layout';
import { cx } from '#/styled-system/css';
import { h1 } from '#/styled-system/recipes';
import { div } from '#/styled-system/recipes/div';

export default async function GroupObjectCoord() {
  return (
    <SubLayout>
      <div className={cx('section-box', div())}>
        <section>
          <div className={cx('heading-box', div())}>
            <h1 className={h1({ box: 'plain' })}>Group에 포함된 객체 좌표 계산</h1>
          </div>

          <div className={cx('canvas-box', div())}>
            <GroupCoordCanvas />
          </div>
        </section>
      </div>
    </SubLayout>
  );
}
