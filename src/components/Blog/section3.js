import React from 'react';

import section3Styles from './section3.module.scss';

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <div className={section3Styles.content_box4}>
        <div className={section3Styles.flex_col}>
          <div className={section3Styles.flex_row}>
            <p className={section3Styles.highlight3}>The Nutri Navigator Experience</p>
            <p className={section3Styles.highlight4}>About the clinic</p>
            <p className={section3Styles.highlight41}>Assistance</p>
            <p className={section3Styles.highlight42}>Join our network</p>
          </div>

          <div className={section3Styles.flex_row1}>
            <p className={section3Styles.highlight2}>Our Story</p>
            <p className={section3Styles.highlight2}>Blog</p>
            <p className={section3Styles.highlight21}>The Nutri Navigator on Instagram</p>
          </div>
        </div>
      </div>

      <div className={section3Styles.content_box3}>
        <div className={section3Styles.flex_col1}>
          <h2 className={section3Styles.medium_title1}>The Nutri Navigator</h2>

          <div className={section3Styles.flex_row2}>
            <p className={section3Styles.highlight5}>About Us</p>
            <p className={section3Styles.highlight5}>Contact Us</p>
          </div>

          <div className={section3Styles.flex_row3}>
            <img
              className={section3Styles.image2}
              src={'/assets/6eb43901c530ba5d9dc9b875ee35695b.png'}
              alt="alt text"
            />
            <img
              className={section3Styles.image3}
              src={'/assets/05e065020038fdd90ba2a9782ea7fc38.png'}
              alt="alt text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection3;
