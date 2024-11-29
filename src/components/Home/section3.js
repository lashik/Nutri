import React from "react";

import section3Styles from "./section3.module.scss";

function renderSection3(props) {
  return (
    <div className={section3Styles.flex_col}>
      <div className={section3Styles.flex_row}>
        <div className={section3Styles.flex_col1}>
          <img
            className={section3Styles.image4}
            src={"/assets/693d1c544e0b42bac447be2898e724f6.svg"}
            alt="alt text"
          />
          <div className={section3Styles.flex_col_rows}>
            <p className={section3Styles.highlight5}>Nutrition Expertise</p>
            <p className={section3Styles.highlight4}>
              Experience vibrant nutrition insights and engage with expert
              advice.
            </p>
          </div>
        </div>

        <div className={section3Styles.flex_col1}>
          <img
            className={section3Styles.image4}
            src={"/assets/Mediamodifier-Design (3).svg"}
            alt="alt text"
          />
          <div className={section3Styles.flex_col_rows}>
            <p className={section3Styles.highlight5}>Healthy Habits</p>
            <p className={section3Styles.highlight4}>
              Learn about rejuvenating practices and wake up feeling energized
            </p>
          </div>
        </div>

        <div className={section3Styles.flex_col1}>
          <img
            className={section3Styles.image4}
            src={"/assets/ffa80c9a7c4dea03145dd361d202a59f.svg"}
            alt="alt text"
          />
          <div className={section3Styles.flex_col_rows}>
            <p className={section3Styles.highlight5}>Weight Management</p>
            <p className={section3Styles.highlight4}>
              Discover effective weight management techniques
            </p>
          </div>
        </div>
      </div>

      <div className={section3Styles.flex_col4}>
        <h2 className={section3Styles.medium_title3}>
          Join Nutri Navigator community and connect with me.
        </h2>

        <div className={section3Styles.flex_row1}>
          <div className={section3Styles.content_box4}>
            <div className={section3Styles.flex_col5}>
              <img
                className={section3Styles.image6}
                src={"/assets/2eac1c94275b31fdf8ad0874935a592e8.svg"}
                alt="alt text"
              />

              <div className={section3Styles.flex_col6}>
                <h2 className={section3Styles.medium_title1}>
                  I feel more energized and informed.
                </h2>
              </div>

              <div className={section3Styles.group1}>
                <p className={section3Styles.highlight7}>Patricia </p>
                <div className={section3Styles.flex_row2}>
                  <img
                    className={section3Styles.image7}
                    src={"/assets/c59e19aa7ce8eb2852dd18f120b4f07c.png"}
                    alt="alt text"
                  />
                  <p className={section3Styles.highlight8}>lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>

          <div className={section3Styles.content_box4}>
            <div className={section3Styles.flex_col5}>
              <img
                className={section3Styles.image6}
                src={"/assets/2eac1c94275b31fdf8ad0874935a592e8.svg"}
                alt="alt text"
              />

              <div className={section3Styles.flex_col6}>
                <h2 className={section3Styles.medium_title1}>
                  Nutri Navigator transformed my approach to eating.
                </h2>
              </div>

              <div className={section3Styles.group2}>
                <p className={section3Styles.highlight7}>David H</p>
                <div className={section3Styles.flex_row2}>
                  <img
                    className={section3Styles.image7}
                    src={"/assets/92bb1c628c29c5724b36442a748fe5d4.png"}
                    alt="alt text"
                  />
                  <p className={section3Styles.highlight8}>
                    Fitness Instructor
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={section3Styles.content_box4}>
            <div className={section3Styles.flex_col5}>
              <img
                className={section3Styles.image6}
                src={"/assets/2eac1c94275b31fdf8ad0874935a592e8.svg"}
                alt="alt text"
              />

              <div className={section3Styles.flex_col6}>
                <h2 className={section3Styles.medium_title1}>
                  Nutrition is the key to health
                </h2>
              </div>

              <div className={section3Styles.group3}>
                <p className={section3Styles.highlight7}>Emily L </p>
                <div className={section3Styles.flex_row2}>
                  <img
                    className={section3Styles.image7}
                    src={"/assets/cd7929f5fdc3e2c0ba624cf9fd8862ba.png"}
                    alt="alt text"
                  />
                  <p className={section3Styles.highlight8}>Dietitian</p>
                </div>
              </div>
            </div>
          </div>

          <div className={section3Styles.content_box4}>
            <div className={section3Styles.flex_col5}>
              <img
                className={section3Styles.image6}
                src={"/assets/2eac1c94275b31fdf8ad0874935a592e8.svg"}
                alt="alt text"
              />
              <div className={section3Styles.flex_col6}>
                <h2 className={section3Styles.medium_title1}>
                  Improved health through balanced diet
                </h2>
              </div>

              <div className={section3Styles.group4}>
                <p className={section3Styles.highlight7}>Michael C</p>
                <div className={section3Styles.flex_row2}>
                  <img
                    className={section3Styles.image7}
                    src={"/assets/bbf0d2e5106ee3f1b4f27310000b0019.png"}
                    alt="alt text"
                  />
                  <p className={section3Styles.highlight8}>Wellness Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderSection3;
