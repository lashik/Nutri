import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from 'components/header.js';
import renderSection2 from './section2';


import styles from './index.module.scss';

function UntitledPage(props) {
  return (
    <main className={cn(styles.main, props.className, 'untitled-page')}>
      
      {renderSection2(props)}

    </main>
  );
}

UntitledPage.propTypes = {
  className: PropTypes.string
};

export default UntitledPage;
