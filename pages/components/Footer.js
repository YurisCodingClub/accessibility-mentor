import React from "react";
import Image from "next/image";
import logo from "../../stories/assets/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image src={logo} alt=" " width={100} height="auto" />
      <p>AccessibilityMentor 2023. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
