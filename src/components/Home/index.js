import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import renderSection2 from "./section2";
import renderSection3 from "./section3";

import styles from "./index.module.scss";

function Home(props) {
  return (
    <main className={cn(styles.main, props.className, "home")}>
      {renderSection2(props)}
      {renderSection3(props)}
    </main>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
