import ObjectCoordCanvas from '#/app/_canvas/ObjectCoordCanvas';
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
            <h1 className={h1({ box: 'plain' })}>stroke 설정에 따른 object 크기 변경 테스트</h1>
          </div>

          <div className={cx('canvas-box', div())}>
            <ObjectCoordCanvas />
          </div>
        </section>
      </div>
    </SubLayout>
  );
}
