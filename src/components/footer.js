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
                
               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gayatribarve@thenutrinavigator.com&su=Subject&body=Let's%20set%20up%20a%20session" >
               Email id: gayatribarve@thenutrinavigator.com
                  </a>

               <a href="tel:+919323497069">Contact no:+91 9323497069</a> 
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
            <div className={section5Styles.flex_row3}>
            <a href="https://www.google.com/maps/place/Palkars+Polyclinic/@19.0245758,72.8345638,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cecf74d3536d:0xadc9971f08a548d0!8m2!3d19.0245707!4d72.8371387!16s%2Fg%2F1tjcmy27?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"><img
                className={section5Styles.image19}
                src={"/assets/pin.png"}
                alt="alt text"
              /></a>
            <a href="https://www.instagram.com/the_nutrinavigator/"><img
                className={section5Styles.image19}
                src={"/assets/instagram.png"}
                alt="alt text"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
