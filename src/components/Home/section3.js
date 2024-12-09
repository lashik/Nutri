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
          Join Nutri Navigator community with these packages.
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
                  Health and Heart
                </h2>
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
                  Maternal Nutrition
                </h2>
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
                  Pediatric Nutrition
                </h2>
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
                  Weight loss/gain
                </h2>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default renderSection3;
