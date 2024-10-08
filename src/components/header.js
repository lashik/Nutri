import React from "react";
import { Link } from "react-router-dom"; // Correctly import Link
import section1Styles from "./header.module.scss";
import styled from "styled-components";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

function Header(props) {
  return (
    <section className={section1Styles.section1}>
      <div className={section1Styles.content_box11}>
        <div className={section1Styles.group}>
          <div className={section1Styles.color3} />

          <CustomLink to="/">
            <img
              className={section1Styles.image}
              src={"/assets/54b774c58bb6bb7c96b8106a4af8626e.png"}
              alt="alt text"
            />
          </CustomLink>
          <div className={section1Styles.text}>
            <CustomLink to="/booknow">Clinic</CustomLink>
          </div>
          <div className={section1Styles.text1}>Expertise</div>
          <div className={section1Styles.text2}>
            <CustomLink to="/blog">Engaging</CustomLink>
          </div>
          <button className={section1Styles.btn}>
            <CustomLink to="/admin-login">SIGN IN</CustomLink>
          </button>
          <CustomLink to="/aboutme">
            <button className={section1Styles.btn1}>DISCOVER MORE</button>
          </CustomLink>
          <CustomLink to="/">
            <h2 className={section1Styles.medium_title}>The Nutri Navigator</h2>
          </CustomLink>
        </div>
      </div>

      <div className={section1Styles.color5} />
      <div className={section1Styles.color4}>{/* TODO: reserved item */}</div>

      <div className={section1Styles.group1}>
        <div className={section1Styles.color1} />
        <p className={section1Styles.highlight}>
          Explore 27 years of expertise
        </p>
      </div>
    </section>
  );
}

export default Header;