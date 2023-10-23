import React from "react";
import Image from "next/image";
import logo from "../../stories/assets/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "fixed",
        bottom: "0",
      }}
    >
      <Image
        src={logo}
        alt="next to black, yellow, and blue dots is Julia's project, accessibilityfirst, written in lowercase and black and blue colors"
        width={100}
        height="auto"
      />
      <p>AccessibilityMentor 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
