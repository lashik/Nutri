import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from 'components/header.js';
import RenderSection2 from './section2';


import styles from './index.module.scss';

function UntitledPage(props) {
  return (
    <main className={cn(styles.main, props.className, 'untitled-page')}>
      
      <RenderSection2/>

    </main>
  );
}

UntitledPage.propTypes = {
  className: PropTypes.string
};

export default UntitledPage;
