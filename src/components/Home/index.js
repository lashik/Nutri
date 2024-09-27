import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from './section1';
import renderSection2 from './section2';
import renderSection3 from './section3';
import renderSection4 from './section4';
import renderSection5 from './section5';

import styles from './index.module.scss';

function Home(props) {
  return (
    <main className={cn(styles.main, props.className, 'home')}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
    </main>
  );
}

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
