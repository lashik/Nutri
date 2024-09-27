import React from 'react';

import section2Styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.group}>
        <div className={section2Styles.color8} />

        <div className={section2Styles.flex_col}>
          <img className={section2Styles.image2} src={'/assets/427b6082687c292bbd747a0a035ab18e.svg'} alt="alt text" />

          <div className={section2Styles.wrapper1}>
            <h1 className={section2Styles.wrapper11}>Discover</h1>
          </div>

          <div
            className={section2Styles.wrapper2}
            style={{ '--src': `url(${'/assets/7335ec2c10ea67783816fec679a25ab9.png'})` }}
          />
          <button className={section2Styles.btn}>
            {/* TODO */}
            LEARN MORE
          </button>
        </div>

        <div className={section2Styles.color} />
      </div>
    </section>
  );
}

export default renderSection2;
