import React from 'react';

import section1Styles from './section1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <div className={section1Styles.flex_col}>
        <div className={section1Styles.content_box1}>
          <p className={section1Styles.highlight}>Explore 27 years of expertise</p>
        </div>

        <div className={section1Styles.content_box2}>
          <div className={section1Styles.color} />

          <div className={section1Styles.content_box}>
            <div className={section1Styles.flex_row}>
              <img
                className={section1Styles.image}
                src={'/assets/54b774c58bb6bb7c96b8106a4af8626e.png'}
                alt="alt text"
              />
              <h2 className={section1Styles.medium_title}>The Nutri Navigator</h2>
              <div className={section1Styles.text}>Clinic</div>
              <div className={section1Styles.text1}>Expertise</div>

              <div className={section1Styles.text2}>
                <div className={section1Styles.text3}>Engaging</div>
              </div>

              <button className={section1Styles.btn}>
                {/* TODO */}
                SIGN IN
              </button>
              <button className={section1Styles.btn1}>
                {/* TODO */}
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={section1Styles.color5} />
      <div className={section1Styles.color4} />
    </section>
  );
}

export default renderSection1;
