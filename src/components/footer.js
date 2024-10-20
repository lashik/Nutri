import React from "react";

import section5Styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
function Footer() {
  return (
    <>
      <div className={section5Styles.flex_col1}>
        <div className={section5Styles.flex_row}>
          <p className={section5Styles.highlight15}>The Nutri Navigator</p>
          <div>
            <p className={section5Styles.highlight16}>About the clinic</p>
            <p className={section5Styles.highlight14}>
              <CustomLink to="/aboutme">Our story</CustomLink>
              <CustomLink to="/aboutme">About us</CustomLink>
            </p>
          </div>
          <div>
            <p className={section5Styles.highlight16}>Assistance</p>
            <p className={section5Styles.highlight14}>
              <CustomLink to="/blog">Blog</CustomLink>
            </p>
          </div>
          <div>
            <p className={section5Styles.highlight16}>Join our network</p>
            <p className={section5Styles.highlight14}>
              <CustomLink to="/booknow">Contact us</CustomLink>
            </p>
            <p className={section5Styles.highlight14}>
              The Nutri Navigator on Instagram
            </p>
            <div className={section5Styles.flex_row3}>
              <img
                className={section5Styles.image19}
                src={"/assets/6eb43901c530ba5d9dc9b875ee35695b.png"}
                alt="alt text"
              />
              <img
                className={section5Styles.image20}
                src={"/assets/05e065020038fdd90ba2a9782ea7fc38.png"}
                alt="alt text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
