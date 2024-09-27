import React from 'react';

import section4Styles from './section4.module.scss';

function renderSection4(props) {
  return (
    <section className={section4Styles.section4}>
      <div className={section4Styles.flex_col}>
        <div className={section4Styles.block1}>
          <div className={section4Styles.flex_col1}>
            <div className={section4Styles.flex_row}>
              <p className={section4Styles.highlight9}>The Nutri Navigator Experience</p>
              <p className={section4Styles.highlight10}>About the clinic</p>
              <p className={section4Styles.highlight101}>Assistance</p>
              <p className={section4Styles.highlight102}>Join our network</p>
            </div>

            <div className={section4Styles.flex_row1}>
              <p className={section4Styles.highlight8}>Our Story</p>
              <p className={section4Styles.highlight8}>Blog</p>
              <p className={section4Styles.highlight81}>The Nutri Navigator on Instagram</p>
            </div>
          </div>
        </div>

        <div className={section4Styles.flex_col2}>
          <h2 className={section4Styles.medium_title5}>The Nutri Navigator</h2>

          <div className={section4Styles.flex_row2}>
            <p className={section4Styles.highlight11}>About Us</p>
            <p className={section4Styles.highlight111}>Contact Us</p>
          </div>

          <div className={section4Styles.flex_row3}>
            <img
              className={section4Styles.image11}
              src={'/assets/6eb43901c530ba5d9dc9b875ee35695b.png'}
              alt="alt text"
            />
            <img
              className={section4Styles.image12}
              src={'/assets/05e065020038fdd90ba2a9782ea7fc38.png'}
              alt="alt text"
            />
          </div>
        </div>
      </div>

      <div className={section4Styles.background} />
    </section>
  );
}

export default renderSection4;
