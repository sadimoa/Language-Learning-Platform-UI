import { useState } from "react";
import Navbar from "./Nav/Navbar.jsx";
import HeroPage from "./Hero/HeroPage.jsx";
import FeaturesPage from "./Features/FeaturesPage.jsx";
import WhyChooseUsPage from "./WhyChooseUs/WhyChooseUsPage.jsx";
import Courses from "./Courses/Courses.jsx";
import Testmo from "./TestmoPage/Testmo.jsx";

function App() {
  return (
    <div className="m-0 w-full">
      <Navbar />
      <HeroPage />
      <FeaturesPage />
      <Courses />
      <Testmo />
    </div>
  );
}

export default App;
