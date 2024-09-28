import React from 'react';

import section4Styles from './section4.module.scss';

function renderSection4(props) {
  return (
    <section className={section4Styles.section4}>
      <div className={section4Styles.content_box9}>
        <div className={section4Styles.flex_col}>
          <h2 className={section4Styles.medium_title1}>Discover more about Nutri Navigator.</h2>

          <div className={section4Styles.flex_row}>
            <div className={section4Styles.content_box8}>
              <div className={section4Styles.flex_row1}>
                <div className={section4Styles.flex_col1}>
                  <h2 className={section4Styles.medium_title4}>
                    Insights
                    <br />
                    Explore the
                  </h2>

                  <div className={section4Styles.flex_row2}>
                    <div className={section4Styles.flex_col2}>
                      <img
                        className={section4Styles.image12}
                        src={'/assets/3f5ec5947a4d445c8daee4b9cc5f5fbd.svg'}
                        alt="alt text"
                      />
                      <img
                        className={section4Styles.image121}
                        src={'/assets/3f5ec5947a4d445c8daee4b9cc5f5fbd.svg'}
                        alt="alt text"
                      />
                      <img
                        className={section4Styles.image14}
                        src={'/assets/d41e0fc56433629b440c6ed01e7b59d2.svg'}
                        alt="alt text"
                      />
                    </div>

                    <div className={section4Styles.flex_col3}>
                      <p className={section4Styles.highlight10}>Nutrition tips weekly</p>
                      <p className={section4Styles.highlight11}>{`Meal plans & recipes`}</p>
                      <p className={section4Styles.highlight101}>{`Expert articles & videos`}</p>
                    </div>
                  </div>

                  <button className={section4Styles.btn}>
                    {/* TODO */}
                    LEARN MORE
                  </button>
                </div>

                <img
                  className={section4Styles.image13}
                  src={'/assets/4353d31e9e3217cb110e3c0df4ae14c7.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <div className={section4Styles.content_box7}>
              <div className={section4Styles.flex_row3}>
                <div className={section4Styles.flex_col4}>
                  <h2 className={section4Styles.medium_title41}>
                    Nutri Navigator Clinic
                    <br />
                    Contact for
                  </h2>

                  <div className={section4Styles.flex_row4}>
                    <div className={section4Styles.flex_col5}>
                      <img
                        className={section4Styles.image122}
                        src={'/assets/bada839f09066cf7a74ae309dd022a0b.svg'}
                        alt="alt text"
                      />
                      <img
                        className={section4Styles.image123}
                        src={'/assets/bada839f09066cf7a74ae309dd022a0b.svg'}
                        alt="alt text"
                      />
                      <img
                        className={section4Styles.image14}
                        src={'/assets/d41e0fc56433629b440c6ed01e7b59d2.svg'}
                        alt="alt text"
                      />
                    </div>

                    <div className={section4Styles.flex_col6}>
                      <p className={section4Styles.highlight102}>
                        Personalized diet plans
                        <br />
                        Nutrition resources
                      </p>
                      <p className={section4Styles.highlight13}>Join our nutrition community.</p>
                    </div>
                  </div>

                  <button className={section4Styles.btn1}>
                    {/* TODO */}
                    EXPLORE PLANS
                  </button>
                </div>

                <img
                  className={section4Styles.image10}
                  src={'/assets/ada08c427685e413ce8b8ab3e591858f.svg'}
                  alt="alt text"
                />
              </div>
            </div>

            <div className={section4Styles.content_box6}>
              <div className={section4Styles.flex_row5}>
                <div className={section4Styles.flex_col7}>
                  <h2 className={section4Styles.medium_title42}>Consultation</h2>

                  <div className={section4Styles.flex_row6}>
                    <div className={section4Styles.flex_col8}>
                      <img
                        className={section4Styles.image12}
                        src={'/assets/3f5ec5947a4d445c8daee4b9cc5f5fbd.svg'}
                        alt="alt text"
                      />
                      <img
                        className={section4Styles.image12}
                        src={'/assets/3f5ec5947a4d445c8daee4b9cc5f5fbd.svg'}
                        alt="alt text"
                      />
                      <img
                        className={section4Styles.image11}
                        src={'/assets/bada839f09066cf7a74ae309dd022a0b.svg'}
                        alt="alt text"
                      />
                    </div>

                    <p className={section4Styles.highlight103}>
                      Tailored nutrition guidance
                      <br />
                      Healthy recipe collection
                      <br />
                      Connect with like-minded
                    </p>
                  </div>

                  <button className={section4Styles.btn2}>
                    {/* TODO */}
                    SIGN UP
                  </button>
                </div>

                <img
                  className={section4Styles.image101}
                  src={'/assets/7f673064cef831956cdaf67cea04c8e0.svg'}
                  alt="alt text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection4;
