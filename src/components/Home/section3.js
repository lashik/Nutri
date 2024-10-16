import React from 'react';

import section3Styles from './section3.module.scss';

function renderSection3(props) {
  return (
    <section className={section3Styles.section3}>
      <div className={section3Styles.flex_col}>
        <div className={section3Styles.content_box}>
          <div className={section3Styles.flex_row}>
            <img
              className={section3Styles.image4}
              src={'/assets/693d1c544e0b42bac447be2898e724f6.svg'}
              alt="alt text"
            />

            <div className={section3Styles.flex_col1}>
              <p className={section3Styles.highlight5}>Nutrition Expertise</p>
              <p className={section3Styles.highlight4}>
                Experience vibrant nutrition insights and engage with expert advice.
              </p>
            </div>

            <div className={section3Styles.wrapper3} />
            <img
              className={section3Styles.image3}
              src={'/assets/Mediamodifier-Design (3).svg'}
              alt="alt text"
            />
            <div className={section3Styles.flex_col2}>
              <p className={section3Styles.highlight51}>Healthy Sleep Habits</p>
              <p className={section3Styles.highlight4}>
                Learn about rejuvenating sleep.
                <br />
                practices and wake up feeling
              </p>
            </div>

            <img
              className={section3Styles.image3}
              src={'/assets/ffa80c9a7c4dea03145dd361d202a59f.svg'}
              alt="alt text"
            />

            <div className={section3Styles.flex_col3}>
              <p className={section3Styles.highlight5}>Stress Management</p>
              <p className={section3Styles.highlight3}>
                Discover effective stress
                <br />
                management techniques and embrace
              </p>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box5}>
          <div className={section3Styles.flex_col4}>
            <h2 className={section3Styles.medium_title3}>Join Nutri Navigator community and connect with me.</h2>

            <div className={section3Styles.flex_row1}>
              <div className={section3Styles.content_box4}>
                <div className={section3Styles.flex_col5}>
                  <img
                    className={section3Styles.image6}
                    src={'/assets/eac1c94275b31fdf8ad0874935a592e8.svg'}
                    alt="alt text"
                  />

                  <div className={section3Styles.flex_col6}>
                    <h2 className={section3Styles.medium_title1}>I feel more</h2>

                    <div className={section3Styles.group}>
                      <h2 className={section3Styles.medium_title11}>energized and</h2>
                      <h2 className={section3Styles.medium_title12}>informed.</h2>
                    </div>
                  </div>

                  <div className={section3Styles.group1}>
                    <div className={section3Styles.flex_row2}>
                      <img
                        className={section3Styles.image7}
                        src={'/assets/c59e19aa7ce8eb2852dd18f120b4f07c.png'}
                        alt="alt text"
                      />
                      <p className={section3Styles.highlight8}></p>
                    </div>

                    <p className={section3Styles.highlight7}>Patricia </p>
                  </div>
                </div>
              </div>

              <div className={section3Styles.content_box3}>
                <div className={section3Styles.flex_col7}>
                  <img
                    className={section3Styles.image61}
                    src={'/assets/eac1c94275b31fdf8ad0874935a592e8.svg'}
                    alt="alt text"
                  />

                  <div className={section3Styles.group2}>
                    <h2 className={section3Styles.medium_title13}>
                      Nutri Navigator
                      <br />
                      transformed my
                    </h2>
                    <h2 className={section3Styles.medium_title14}>approach to eating</h2>
                  </div>

                  <div className={section3Styles.group3}>
                    <div className={section3Styles.flex_row3}>
                      <img
                        className={section3Styles.image5}
                        src={'/assets/92bb1c628c29c5724b36442a748fe5d4.png'}
                        alt="alt text"
                      />
                      <p className={section3Styles.highlight6}>Fitness Instructor</p>
                    </div>

                    <p className={section3Styles.highlight71}>David H</p>
                  </div>
                </div>
              </div>

              <div className={section3Styles.content_box2}>
                <div className={section3Styles.flex_col8}>
                  <img
                    className={section3Styles.image62}
                    src={'/assets/eac1c94275b31fdf8ad0874935a592e8.svg'}
                    alt="alt text"
                  />

                  <div className={section3Styles.group4}>
                    <h2 className={section3Styles.medium_title13}>
                      Nutrition is
                      <br />
                      the key to a
                    </h2>
                    <h2 className={section3Styles.medium_title15}>healthy</h2>
                  </div>

                  <div className={section3Styles.group5}>
                    <p className={section3Styles.highlight72}>Emily L</p>

                    <div className={section3Styles.flex_row4}>
                      <img
                        className={section3Styles.image8}
                        src={'/assets/cd7929f5fdc3e2c0ba624cf9fd8862ba.png'}
                        alt="alt text"
                      />
                      <p className={section3Styles.highlight9}>Dietitian</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={section3Styles.content_box1}>
                <div className={section3Styles.flex_col9}>
                  <img
                    className={section3Styles.image61}
                    src={'/assets/eac1c94275b31fdf8ad0874935a592e8.svg'}
                    alt="alt text"
                  />
                  <h2 className={section3Styles.medium_title2}>
                    Improved health
                    <br />
                    through
                    <br />
                    balanced
                  </h2>

                  <div className={section3Styles.group6}>
                    <div className={section3Styles.flex_row5}>
                      <img
                        className={section3Styles.image9}
                        src={'/assets/bbf0d2e5106ee3f1b4f27310000b0019.png'}
                        alt="alt text"
                      />
                      <p className={section3Styles.highlight61}>Wellness Coach</p>
                    </div>

                    <p className={section3Styles.highlight73}>Michael C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection3;
