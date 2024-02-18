import { useState } from "react";
import logo from '../assets/logo.png'

function Navbar() {
  return (
      <div className="flex flex-row justify-between mt-5">
        <div className="logo">
          <img src={logo}/>
        </div>
        <div className="navbar">
          <ul>
            <li>Teachers</li>
            <li>Courses</li>
            <li>Scholarship</li>
            <li>Pricing</li>
          </ul>
          <button>Signup</button>
        </div>
      </div>
  );
}

export default Navbar;
