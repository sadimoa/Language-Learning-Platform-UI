import React from "react";

const Cta = () => {
  return (
    <div className="mx-[118px] mb-80">
      <div className="bg-[#7E4181] w-full h-[300px] rounded-lg flex flex-col justify-center items-center">
        <h3 className="font-bold text-white text-4xl pt-5 text-center">
          Lets get started <br />
          your <span className="font-light"> Education</span>
        </h3>
        <button className="bg-[#0D8974] mt-10  w-[130px] h-[33px] rounded text-center text-sm cursor-pointer hover:bg-[#0c7a68] text-[#f5f5f5] self-center">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Cta;
