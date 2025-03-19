import SubLayout from '#/components/layout/sub-layout';
import { css, cx } from '#/styled-system/css';
import { h1 } from '#/styled-system/recipes';
import { div } from '#/styled-system/recipes/div';
import Link from 'next/link';

const styledUl = css({
  '& > li': {
    listStyleType: 'disc',
  },
});

const styledCanvasBoxDiv = css({
  padding: '2rem 5rem',
});

export default async function Home() {
  return (
    <SubLayout>
      <div className={cx('section-box', div())}>
        <section>
          <div className={cx('heading-box', div())}>
            <h1 className={h1({ box: 'plain' })}>fabric.js 테스트</h1>
          </div>

          <div className={cx('canvas-box', styledCanvasBoxDiv, div())}>
            <ul className={styledUl}>
              <li>
                <Link href="/per-pixel-find-target">perPixelFindTarget 테스트</Link>
              </li>
              <li>
                <Link href="/object-coord">object coord 테스트</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </SubLayout>
  );
}
