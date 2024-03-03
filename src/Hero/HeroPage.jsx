import React from "react";
import heroImg from "../assets/hero.png";
import card1 from "../assets/Card10$.png";

function HeroPage() {
  return (
    <div className="mt-10 mx-[118px] text-[#1e1e1e] flex flex-column items-center justify-center gap-10">
      <div className="">
        <span className="font-light">First-Timers, Exclusive Offer Awaits!</span>
        <h1 className="text-7xl font-bold">
          New why To <br />
          Learn
          <span className="text-[#0D8974]"> Language</span>
        </h1>
        <p className="text-[21px] mt-5 font-light">
          Unlock Premium Perks: Elevate Your Learning with <br /> Exclusive
          Courses!
        </p>
        <div className="flex flex-column items-center gap-5 mt-5">
          <button className="bg-[#FF5151]  w-[100px] h-[33px] rounded text-center text-sm cursor-pointer hover:bg-[#ca4040] text-[#f5f5f5]">
            {" "}
            Get started
          </button>
          <button className="border-[#0D8974] border  w-[100px] h-[33px] rounded text-center text-sm cursor-pointer hover:bg-[#0D8974]">
            Discover
          </button>
        </div>
      </div>

      <img className="w-[28%] mb-14" src={heroImg} />
      <img className="w-[200px]  absolute top-80 right-[150px]" src={card1} />
    </div>
  );
}

export default HeroPage;
