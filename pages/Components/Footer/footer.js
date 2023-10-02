import React from "react";
import Image from 'next/image';

import Logo from '../../../Assets/logo.svg';


function Footer() {
  
    return (
      <div className="footer-container">
        <div className="logo-cont">
          <Image
          src={Logo}
          alt="Footer-logo"
          width={300}
          height={150}
          />
        </div>
      <span className="footer-copyright">© AccessibilityMentor 2023. All rights reserved.</span>
      </div>
    );
  };
  
  export default Footer;