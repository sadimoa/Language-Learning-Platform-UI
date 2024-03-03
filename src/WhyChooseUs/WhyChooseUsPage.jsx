import React from "react";
import girl from "../assets/maskgirl.png";
import boy from "../assets/maskboy.png";
import card1 from "../assets/Card10$.png";

function WhyChooseUsPage() {
  return (
    <div className="mx-[118px] my-20 gap-[120px] flex flex-col items-center justify-center">
      <div className="mt-20 mr-40 flex flex-row items-center gap-20">
        <img className="w-[400px] h-[400px]" src={girl} alt={girl} />
        <div>
          <h3 className="text-2xl font-bold">
            An Exceptionally <br />
            Unique <span className="text-[#A863AB]">Experience</span> <br />
            Tailored to You
          </h3>
          <p className="mt-2 font-light text-sm">
            Discover a transformative approach to language <br /> learning. With
            our tailored methods, your unique <br /> journey becomes
          </p>
          <button className="bg-[#FF5151] mt-2  w-[100px] h-[33px] rounded text-center text-sm cursor-pointer hover:bg-[#ca4040] text-[#f5f5f5]">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-10 ml-20 relative flex flex-row-reverse items-center gap-20">
        <img className="w-[350px] h-[350px]" src={boy} alt={boy} />
        <img
          className="w-[200px] absolute top-[20px] right-[-110px]"
          src={card1}
        />
        <div>
          <h3 className="text-2xl font-bold">
            <span className="text-[#0D8974]">The idea Behind</span> <br />
            Selection Was To <br />
            Show A Big Data
          </h3>
          <p className="mt-2  font-light text-sm">
            Discover a transformative approach to language <br /> learning. With
            our tailored methods, your unique <br /> journey becomes
          </p>
          <button className="bg-[#0D8974] mt-2 w-[100px] h-[33px] rounded text-center text-sm cursor-pointer hover:bg-[#ca4040] text-[#f5f5f5]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsPage;
