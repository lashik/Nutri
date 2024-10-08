import React from 'react';

import section2Styles from './section2.module.scss';
import BlogLis from './BlogLit.js';
function renderSection2(props) {
  return (
    <section className={section2Styles.section2}>
      <div className={section2Styles.section21}>
        <div className={section2Styles.flex_row}>
          <h2 className={section2Styles.medium_title2}>BLOG</h2>
          <img className={section2Styles.image4} src={'/assets/4966e143a51bd71a860f70f8cc8b946c.svg'} alt="alt text" />
          
        </div>
        <div>
            <BlogLis/>
        </div>
        
      </div>
    </section>
  );
}

export default renderSection2;
