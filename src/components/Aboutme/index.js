import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from 'components/header.js';
import renderSection2 from './section2';
import renderSection3 from './section3';


import styles from './index.module.scss';

function Aboutme(props) {
  return (
    <main className={cn(styles.main, props.className, 'aboutme')}>
     
      {renderSection2(props)}
      {renderSection3(props)}
      
    </main>
  );
}

Aboutme.propTypes = {
  className: PropTypes.string
};

export default Aboutme;
