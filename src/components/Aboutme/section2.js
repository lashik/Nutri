import React from 'react';

import section2Styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.flex_col}>
        <h1 className={section2Styles.title}>About Me</h1>

        <div className={section2Styles.content_box2}>
          <div className={section2Styles.flex_col1}>
            <div className={section2Styles.flex_row}>
              <img
                className={section2Styles.image}
                src={'/assets/db297ddeddc633e25653fbc114e93f94.png'}
                alt="alt text"
              />
              <h2 className={section2Styles.medium_title1}>Gayatri Barve</h2>
            </div>

            <p
              className={
                section2Styles.highlight
              }>{`Welcome to Nutri Navigator! I'm Gayatri Barve, a dedicated nutritionist with 22 years of experience in both normal and therapeutic nutrition. My mission is to empower you to achieve lasting health and wellness through structured, sustainable changes, rather than unsustainable short-term fixes and temporary solutions.`}</p>
          </div>
        </div>

        <div className={section2Styles.content_box1}>
          <p
            className={
              section2Styles.highlight1
            }>{`Often, people start lifestyle changes with the best intentions, only to feel overwhelmed by dramatic changes. My approach is personalized, considering each individual's unique needs, lifestyle, and health goals to ensure that the plan is both sustainable and effective.`}</p>
        </div>

        <h2 className={section2Styles.medium_title}>Join Nutri Navigator community and connect with me.</h2>
      </div>
    </section>
  );
}

export default renderSection2;
