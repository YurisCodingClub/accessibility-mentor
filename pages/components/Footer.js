import React from "react";
import Image from "next/image";
import Logo from '/../../assets/logo.svg';
export default function Footer() {

  return (
    <footer style={{ width: '100%'}} className="bg-gray-900">
      <div className="container mx-auto px-6 py-10">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="Company Logo" />
          <p className="text-gray-500">&copy; 2023 Company Name</p> 
        </div>
      </div>
    </footer>
  );

};
 
