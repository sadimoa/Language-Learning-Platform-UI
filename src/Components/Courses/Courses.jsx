import React from "react";
import speak from "../../assets/Rectangle19.png";
import reading from "../../assets/Rectangle20.png";
import writing from "../../assets/Rectangle21.png";

function Courses() {
  return (
    <div className=" mt-40 bg-slate-50 w-full pb-80 pt-20 h-full flex flex-col items-center gap-20">
      <h3 className="self-start text-3xl font-medium ml-[18.5%]">
        Browse Our Popular Courses
      </h3>
      <div className="mx-[118px] flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-20  ">
        <div className=" w-[250px] h-[350px] bg-white shadow flex flex-col items-center gap-5 relative ">
          <img className="rounded" src={speak} alt={speak} />
          <div className="info">
            <div className="flex flex-row items-center justify-between pb-4">
              <span>Speaking </span>
              <span>2.7 ⭐⭐</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">
                The Ultimate Speaking <br /> Courses For Biggners
              </h3>
              <div className="flex  flex-row items-center justify-between pt-3">
                <span>⏱ 13hr </span>
                <span> 📹 12 Lessons</span>
              </div>
            </div>
            <span className=" text-blue-400 absolute bottom-2 right-[25px] font-bold ">
              $17,00
            </span>
          </div>
        </div>
        <div className=" w-[250px] h-[350px] bg-white shadow flex flex-col items-center gap-5 relative">
          <img className="rounded" src={writing} alt={writing} />
          <div className="info">
            <div className="flex flex-row items-center justify-between pb-4">
              <span>Writing </span>
              <span>2.7 ⭐⭐</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">
                The Ultimate Speaking <br /> Courses For Biggners
              </h3>
              <div className="flex  flex-row items-center justify-between pt-3">
                <span>⏱ 13hr </span>
                <span> 📹 12 Lessons</span>
              </div>
            </div>
            <span className=" text-blue-400 absolute bottom-2 right-[25px] font-bold ">
              $17,00
            </span>
          </div>
        </div>
        <div className=" w-[250px] h-[350px] bg-white shadow flex flex-col items-center gap-5 relative">
          <img className="rounded" src={reading} alt={reading} />
          <div className="info">
            <div className="flex flex-row items-center justify-between pb-4">
              <span>Reading </span>
              <span>2.7 ⭐⭐</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">
                The Ultimate Speaking <br /> Courses For Biggners
              </h3>
              <div className="flex  flex-row items-center justify-between pt-3">
                <span>⏱ 13hr </span>
                <span> 📹 12 Lessons</span>
              </div>
            </div>
            <span className=" text-blue-400 absolute bottom-2 right-[25px] font-bold ">
              $17,00
            </span>
          </div>
        </div>
        <div className=" w-[250px] h-[350px] bg-white shadow flex flex-col items-center gap-5 relative ">
          <img className="rounded" src={speak} alt={speak} />
          <div className="info">
            <div className="flex flex-row items-center justify-between pb-4">
              <span>Speaking </span>
              <span>2.7 ⭐⭐</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">
                The Ultimate Speaking <br /> Courses For Biggners
              </h3>
              <div className="flex  flex-row items-center justify-between pt-3">
                <span>⏱ 13hr </span>
                <span> 📹 12 Lessons</span>
              </div>
            </div>
            <span className=" text-blue-400 absolute bottom-2 right-[25px] font-bold ">
              $17,00
            </span>
          </div>
        </div>
        <div className=" w-[250px] h-[350px] bg-white shadow flex flex-col items-center gap-5 relative">
          <img className="rounded" src={writing} alt={writing} />
          <div className="info">
            <div className="flex flex-row items-center justify-between pb-4">
              <span>Writing </span>
              <span>2.7 ⭐⭐</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">
                The Ultimate Speaking <br /> Courses For Biggners
              </h3>
              <div className="flex  flex-row items-center justify-between pt-3">
                <span>⏱ 13hr </span>
                <span> 📹 12 Lessons</span>
              </div>
            </div>
            <span className=" text-blue-400 absolute bottom-2 right-[25px] font-bold ">
              $17,00
            </span>
          </div>
        </div>
        <div className=" w-[250px] h-[350px] bg-white shadow flex flex-col items-center gap-5 relative">
          <img className="rounded" src={reading} alt={reading} />
          <div className="info">
            <div className="flex flex-row items-center justify-between pb-4">
              <span>Reading </span>
              <span>2.7 ⭐⭐</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">
                The Ultimate Speaking <br /> Courses For Biggners
              </h3>
              <div className="flex  flex-row items-center justify-between pt-3">
                <span>⏱ 13hr </span>
                <span> 📹 12 Lessons</span>
              </div>
            </div>
            <span className=" text-blue-400 absolute bottom-2 right-[25px] font-bold ">
              $17,00
            </span>
          </div>
        </div>
      </div>
      <button className="bg-[#0D8974] mt-10  w-[100px] h-[33px] rounded text-center text-sm cursor-pointer hover:bg-[#ca4040] text-[#f5f5f5] self-center">
        See More
      </button>
    </div>
  );
}

export default Courses;
