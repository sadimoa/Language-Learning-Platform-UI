import React from "react";
import logo from "../assets/logo(2).png";
import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import Linkedin from "../assets/Linkedin.png";
import copyright from "../assets/copyright.png";

const Footer = () => {
  return (
    <div className="mx-[118px]">
      <div className="border-b mt-40 mb-2 pb-2">
        <div className="flex flex-row  items-center justify-around">
          <img className="w-[120px]" src={logo} alt={logo} />
          <ul className="flex flex-col">
            <li>Teachers</li>
            <li>Courses</li>
          </ul>
          <ul className="flex flex-col">
            <li>Scholarship</li>
            <li>Pricing</li>
          </ul>
          <div className="flex flex-row gap-5 items-center justify-center">
            <img src={facebook} alt={facebook} />
            <img src={Linkedin} alt={Linkedin} />
            <img src={instagram} alt={instagram} />
            <img src={telegram} alt={telegram} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end  gap-2">
        {" "}
        <img className="w-[10px] mb-1" src={copyright} alt={copyright} />
        <p className=" text-right mr-[5.2rem] mb-2">
          2024 Safara all right resaved
        </p>
      </div>
    </div>
  );
};

export default Footer;
