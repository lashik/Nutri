import React from 'react';

import section2Styles from './section2.module.scss';

function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.flex_col}>
        <h1 className={section2Styles.title}>Book a consultation</h1>

        <div className={section2Styles.content_box7}>
          <div className={section2Styles.flex_col1}>
            <div className={section2Styles.content_box5}>
              <div className={section2Styles.flex_col2}>
                <div className={section2Styles.flex_row}>
                  <div className={section2Styles.flex_col3}>
                    <div className={section2Styles.info}>Name</div>

                    <div className={section2Styles.content_box2}>
                      <div className={section2Styles.info1}>Name</div>
                    </div>
                  </div>

                  <div className={section2Styles.flex_col4}>
                    <div className={section2Styles.info2}>Email id</div>

                    <div className={section2Styles.content_box3}>
                      <div className={section2Styles.info11}>Email ID</div>
                    </div>
                  </div>
                </div>

                <div className={section2Styles.flex_col5}>
                  <div className={section2Styles.flex_col6}>
                    <div className={section2Styles.info}>Number</div>

                    <div className={section2Styles.content_box2}>
                      <div className={section2Styles.info12}>Phone no.</div>
                    </div>
                  </div>

                  <div className={section2Styles.flex_col7}>
                    <div className={section2Styles.info}>Description</div>

                    <div className={section2Styles.content_box1}>
                      <div className={section2Styles.info13}>Describe the help you are looking for</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={section2Styles.content_box6}>
              <button className={section2Styles.btn}>
                {/* TODO */}
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection2;
