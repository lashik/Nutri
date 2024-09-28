import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from './section1';
import renderSection2 from './section2';
import renderSection3 from './section5';

import styles from './index.module.scss';

function UntitledPage(props) {
  return (
    <main className={cn(styles.main, props.className, 'untitled-page')}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
    </main>
  );
}

UntitledPage.propTypes = {
  className: PropTypes.string
};

export default UntitledPage;
