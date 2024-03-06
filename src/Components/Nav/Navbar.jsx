import { useState } from "react";
import logo from "../../assets/logo(2).png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="mx-[118px] flex flex-row justify-around mt-5 border-b pb-3">
        <div className="logo">
          <img className="w-[140px]" src={logo} />
        </div>
        <div className="flex flex-row  items-center gap-8  text-[#1e1e1e]">
          <ul className="flex flex-row gap-8">
            <li className="cursor-pointer hover:border-b border-[#0D8974]">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:border-b border-[#0D8974]">
              Teachers
            </li>
            <li className="cursor-pointer hover:border-b border-[#0D8974]">
              Courses
            </li>

            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="border-[#0D8974] border  w-[75px] h-[30px] rounded-full text-center text-sm cursor-pointer hover:bg-[#0D8974] hover:text-[#f5f5f5]">
                  Signup
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
