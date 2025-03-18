import { css, cx } from '#/styled-system/css';
import { div } from '#/styled-system/recipes';
import { Fragment } from 'react';

const styledNav = css({
  width: '100%',
  height: '4rem',
  boxShadow: '0px 5px 10px -8px rgba(0,0,0,0.3)',
  '& > .nav-div-box': {
    height: '100%',
    alignItems: 'center',
    padding: '0 2rem',
  },
});

const styledMain = css({
  width: '100%',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingTop: '0.5rem',
});

export default function SubLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Fragment>
      <nav className={styledNav}>
        <div className={cx(div(), 'nav-div-box')}>
          <p>fabric.js 테스트</p>
        </div>
      </nav>
      <main className={styledMain}>{children}</main>
    </Fragment>
  );
}
