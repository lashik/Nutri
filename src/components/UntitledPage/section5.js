import React from 'react';

import section5Styles from './section5.module.scss';

function renderSection5(props) {
  return (
    <section className={section5Styles.section5}>
      <div className={section5Styles.flex_col}>
        <div className={section5Styles.block1}>
          <div className={section5Styles.flex_col1}>
            <div className={section5Styles.flex_row}>
              <p className={section5Styles.highlight15}>The Nutri Navigator Experience</p>
              <p className={section5Styles.highlight16}>About the clinic</p>
              <p className={section5Styles.highlight161}>Assistance</p>
              <p className={section5Styles.highlight162}>Join our network</p>
            </div>

            <div className={section5Styles.flex_row1}>
              <p className={section5Styles.highlight14}>Our Story</p>
              <p className={section5Styles.highlight14}>Blog</p>
              <p className={section5Styles.highlight141}>The Nutri Navigator on Instagram</p>
            </div>
          </div>
        </div>

        <div className={section5Styles.content_box10}>
          <div className={section5Styles.flex_col2}>
            <h2 className={section5Styles.medium_title5}>The Nutri Navigator</h2>

            <div className={section5Styles.flex_row2}>
              <p className={section5Styles.highlight17}>About Us</p>
              <p className={section5Styles.highlight171}>Contact Us</p>
            </div>

            <div className={section5Styles.flex_row3}>
              <img
                className={section5Styles.image19}
                src={'/assets/6eb43901c530ba5d9dc9b875ee35695b.png'}
                alt="alt text"
              />
              <img
                className={section5Styles.image20}
                src={'/assets/05e065020038fdd90ba2a9782ea7fc38.png'}
                alt="alt text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection5;
