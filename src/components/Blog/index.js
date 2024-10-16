import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';


import renderSection2 from './section2';


import styles from './index.module.scss';

function Blog(props) {
  return (
    <main className={cn(styles.main, props.className, 'blog')}>
      
      {renderSection2(props)}

    </main>
  );
}

Blog.propTypes = {
  className: PropTypes.string
};

export default Blog;
