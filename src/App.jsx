import { useState } from "react";
import Navbar from "./Nav/Navbar.jsx";
import HeroPage from "./Hero/HeroPage.jsx";
import FeaturesPage from "./Features/FeaturesPage.jsx";
import WhyChooseUsPage from "./WhyChooseUs/WhyChooseUsPage.jsx";
import Courses from "./Courses/Courses.jsx";
import Testmo from "./TestimonialPage/Testmo.jsx";
import Cta from "./Cta/Cta.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="m-0 w-full">
      <Navbar />
      <HeroPage />
      <FeaturesPage />
      <Courses />
      <Cta />
      <Testmo />
      <Footer />
    </div>
  );
}

export default App;
