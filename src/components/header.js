import React from "react";
import { Link } from "react-router-dom";
import section1Styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={section1Styles.group1}>
        <p>Explore 27 years of expertise</p>
      </div>

      <div className={section1Styles.group}>
        <Link className={section1Styles.links} to="/">
          <img
            className={section1Styles.image}
            src={"/assets/54b774c58bb6bb7c96b8106a4af8626e.png"}
            alt="alt text"
          />
          <h2 className={section1Styles.medium_title}>The Nutri Navigator</h2>
        </Link>
        {/* <Link className={section1Styles.links1} to="/booknow">
          <div className={section1Styles.hyperlink}>Clinic</div>
        </Link> */}
        <Link className={section1Styles.links1} to="/aboutme">
          <div className={section1Styles.hyperlink}>About us</div>
        </Link>
        <Link className={section1Styles.links1} to="/blog">
          <div className={section1Styles.hyperlink}>Blog</div>
        </Link>
        <button className={section1Styles.btn}>
          <Link className={section1Styles.links2} to="/admin-login">
            SIGN IN
          </Link>
        </button>

        <button className={section1Styles.btn1}>
          <Link className={section1Styles.links3} to="/booknow">
            BOOK NOW
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header;
