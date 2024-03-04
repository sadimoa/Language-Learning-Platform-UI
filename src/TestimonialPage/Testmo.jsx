import React from "react";
import me from "../assets/me.png";

const Testmo = () => {
  return (
    <div className="mx-[118px] my-20">
      <h3 className=" text-3xl font-medium mb-10">
        What our students say about us
      </h3>
      <div className="flex flex-row  gap-10">
      <div className="mb-20 w-[250px] h-[250px] bg-white shadow">
        <div className="flex flex-col items-start gap-5 m-3">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            Discover a transformative approach to language learning. With our
            tailored methods, <br /> your unique journey becomes
          </p>
          <div className="flex flex-row items-center gap-3">
            <img className="w-[40px]" src={me} alt={me} />
            <div>
              <h3 className=" font-medium ">Natalia Hernadez</h3>
              <p className="">CEO @Stockey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 w-[250px] h-[250px] bg-white shadow">
        <div className="flex flex-col items-start gap-5 ml-2 mt-3">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            Discover a transformative approach to language learning. With our
            tailored methods, <br /> your unique journey becomes
          </p>
          <div className="flex flex-row items-center gap-3">
            <img className="w-[40px]" src={me} alt={me} />
            <div>
              <h3 className=" font-medium ">Natalia Hernadez</h3>
              <p className="">CEO @Stockey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 w-[250px] h-[250px] bg-white shadow">
        <div className="flex flex-col items-start gap-5 ml-2 mt-3">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            Discover a transformative approach to language learning. With our
            tailored methods, <br /> your unique journey becomes
          </p>
          <div className="flex flex-row items-center gap-3">
            <img className="w-[40px]" src={me} alt={me} />
            <div>
              <h3 className=" font-medium ">Natalia Hernadez</h3>
              <p className="">CEO @Stockey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-20 w-[250px] h-[250px] bg-white shadow">
        <div className="flex flex-col items-start gap-5 m-3">
          <span>⭐⭐⭐⭐⭐</span>
          <p>
            Discover a transformative approach to language learning. With our
            tailored methods, <br /> your unique journey becomes
          </p>
          <div className="flex flex-row items-center gap-3">
            <img className="w-[40px]" src={me} alt={me} />
            <div>
              <h3 className=" font-medium ">Natalia Hernadez</h3>
              <p className="">CEO @Stockey</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Testmo;
