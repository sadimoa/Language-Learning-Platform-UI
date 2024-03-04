import React from "react";
import Goal from "../assets/Bullseye.png";
import Graduate from "../assets/Graduate.png";
import Chat from "../assets/Edit Chat History.png";
import Earth from "../assets/Earth Planet.png";
import WhyChooseUsPage from "../WhyChooseUs/WhyChooseUsPage";

function FeaturesPage() {
  return (
    <div className="my-40 mx-[118px]">
      <h1 className="text-center text-4xl font-medium  mb-20">
        Provided Features
      </h1>
      <div className="mt-10 flex flex-row items-center justify-center gap-10">
        <div className="text-center p-3  rounded-sm flex flex-col items-center">
          <img className="w-[60px] mb-2 " src={Earth} alt="Earth" />

          <h3 className="font-bold">Remote Friendly</h3>
          <p className="font-light">
            Access Knowledge Anywhere, <br />
            Anytime!
          </p>
        </div>
        <div className="text-center p-3 rounded-sm flex flex-col items-center">
          <img className="w-[60px] mb-2" src={Graduate} alt="Graduate" />

          <h3 className="font-bold">Digital Diploma</h3>
          <p className="font-light">
            Achieve a Digital Diploma for <br />
            Success!
          </p>
        </div>
        <div className="text-center p-3  rounded-sm flex flex-col items-center">
          <img className="w-[60px] mb-2" src={Goal} alt="Goal" />

          <h3 className="font-bold">Private Target</h3>
          <p className="font-light">
            Private Learning, Tailored for:
            <br />
            You
          </p>
        </div>
        <div className="text-center p-3  rounded-sm flex flex-col items-center">
          <img className="w-[60px] mb-2" src={Chat} alt="Chat" />

          <h3 className="font-bold">Modern Method</h3>
          <p className="font-light">
            Master Languages with Modern: <br />
            Proficiency
          </p>
        </div>
      </div>
      <WhyChooseUsPage />
    </div>
  );
}

export default FeaturesPage;
