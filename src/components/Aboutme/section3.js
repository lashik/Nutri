import React from "react";

import section3Styles from "./section3.module.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

function renderSection3() {
  return (
    <div className={section3Styles.flex_col}>
      <h2 className={section3Styles.medium_title}>
        Join Nutri Navigator community and connect with me.
      </h2>
      <div className={section3Styles.flex_row}>
        <div className={section3Styles.content_box3}>
          <div className={section3Styles.flex_col1}>
            <img
              className={section3Styles.image5}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />

            <div className={section3Styles.group}>
              <h2 className={section3Styles.medium_title3}>
                I feel more energized and informed.
              </h2>
            </div>

            <div className={section3Styles.group1}>
              <div className={section3Styles.flex_row1}>
                <img
                  className={section3Styles.image6}
                  src={"/assets/c59e19aa7ce8eb2852dd18f120b4f07c.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight5}></p>
              </div>

              <p className={section3Styles.highlight4}>Patricia R.</p>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box4}>
          <div className={section3Styles.flex_col2}>
            <img
              className={section3Styles.image51}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />

            <div className={section3Styles.group2}>
              <h2 className={section3Styles.medium_title3}>
                Nutri Navigator transformed my approach to eating
              </h2>
            </div>

            <div className={section3Styles.group3}>
              <div className={section3Styles.flex_row2}>
                <img
                  className={section3Styles.image4}
                  src={"/assets/92bb1c628c29c5724b36442a748fe5d4.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight3}>Fitness Instructor</p>
              </div>

              <p className={section3Styles.highlight41}>David H</p>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box5}>
          <div className={section3Styles.flex_col3}>
            <img
              className={section3Styles.image52}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />

            <div className={section3Styles.group4}>
              <h2 className={section3Styles.medium_title3}>
                Nutrition is the key to a healthy
              </h2>
            </div>

            <div className={section3Styles.group5}>
              <p className={section3Styles.highlight42}>Emily L</p>

              <div className={section3Styles.flex_row3}>
                <img
                  className={section3Styles.image7}
                  src={"/assets/cd7929f5fdc3e2c0ba624cf9fd8862ba.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight6}>Dietitian</p>
              </div>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box6}>
          <div className={section3Styles.flex_col4}>
            <img
              className={section3Styles.image51}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />
            <h2 className={section3Styles.medium_title4}>
              Improved health through balanced
            </h2>

            <div className={section3Styles.group6}>
              <div className={section3Styles.flex_row4}>
                <img
                  className={section3Styles.image8}
                  src={"/assets/bbf0d2e5106ee3f1b4f27310000b0019.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight31}>Wellness Coach</p>
              </div>

              <p className={section3Styles.highlight43}>Michael C</p>
            </div>
          </div>
        </div>
      </div>

      <button className={section3Styles.btn}>
        <CustomLink to="/booknow"> BOOK NOW</CustomLink>
      </button>
    </div>
  );
}

export default renderSection3;
