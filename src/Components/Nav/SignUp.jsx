import React from "react";
import Navbar from "./Navbar";

const Signup = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-row items-center ">
       <div className="min-h-screen bg-[#0D8974] text-[#e8e8e8]  w-[50%]">
       <div className=" text-center m-auto mt-40">
          <h3 className="text-6xl pb-4 font-bold">Welcome Back!</h3>
          <p className="pb-10 text-2xl font-light">
            To keep connects with us please <br />
            Login with your personal Info
          </p>
          <button className="border-[#f5f5f5] border  w-[170px] h-[50px] rounded-full text-center text-sm cursor-pointer hover:bg-[#e1e1] hover:text-[#f5f5f5]">
            Login
          </button>
        </div>
       </div>
        <div></div>
      </div>
    </>
  );
};

export default Signup;
