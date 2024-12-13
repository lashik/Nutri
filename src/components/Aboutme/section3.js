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
      <div className={section3Styles.flex_row1}>
        <div className={section3Styles.content_box4}>
          <div className={section3Styles.flex_col5}>
            <img
              className={section3Styles.image6}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />

            <div className={section3Styles.flex_col6}>
              <h2 className={section3Styles.medium_title1}>
              I managed to lose 8-9 kgs without the need for intense exercise.
              If you’re looking for quick and effective results, Mrs. Barve is the person to go to. Highly recommended!
              </h2>
            </div>

            <div className={section3Styles.group1}>
              <p className={section3Styles.highlight7}>Radhika Iyengar </p>
              <div className={section3Styles.flex_row2}>
                <img
                  className={section3Styles.image7}
                  src={"/assets/woman.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight8}>Student</p>
              </div>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box4}>
          <div className={section3Styles.flex_col5}>
            <img
              className={section3Styles.image6}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />

            <div className={section3Styles.flex_col6}>
              <h2 className={section3Styles.medium_title1}>
              What sets Gayatri Ma’am apart is the holistic approach.
              If you are looking for a nutritionist who truly cares about your health and well- being, I wholeheartedly recommend Gayatri Ma’am’s Diet.
              </h2>
            </div>

            <div className={section3Styles.group2}>
              <p className={section3Styles.highlight7}>Sarita Gindodia</p>
              <div className={section3Styles.flex_row2}>
                <img
                  className={section3Styles.image7}
                  src={"/assets/woman.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight8}></p>
              </div>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box4}>
          <div className={section3Styles.flex_col5}>
            <img
              className={section3Styles.image6}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />

            <div className={section3Styles.flex_col6}>
              <h2 className={section3Styles.medium_title1}>
              Gayatri’s diets are not only custom made to your body’s 
              requirements but also considers your family’s lifestyle.  
              For a scientific and holistic diet, my go to person is Gayatri anytime.
              </h2>
            </div>

            <div className={section3Styles.group3}>
              <p className={section3Styles.highlight7}>Shilpa Wagh</p>
              <div className={section3Styles.flex_row2}>
                <img
                  className={section3Styles.image7}
                  src={"/assets/woman.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight8}></p>
              </div>
            </div>
          </div>
        </div>

        <div className={section3Styles.content_box4}>
          <div className={section3Styles.flex_col5}>
            <img
              className={section3Styles.image6}
              src={"/assets/eac1c94275b31fdf8ad0874935a592e8.svg"}
              alt="alt text"
            />
            <div className={section3Styles.flex_col6}>
              <h2 className={section3Styles.medium_title1}>
                  I have been consulting Mrs.Barve for a few years now and I have been getting good results. My digestion has improved and feeling much better in my gut.
              </h2>
            </div>

            <div className={section3Styles.group4}>
              <p className={section3Styles.highlight7}>Neel Pethe</p>
              <div className={section3Styles.flex_row2}>
                <img
                  className={section3Styles.image7}
                  src={"/assets/man.png"}
                  alt="alt text"
                />
                <p className={section3Styles.highlight8}></p>
              </div>
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
