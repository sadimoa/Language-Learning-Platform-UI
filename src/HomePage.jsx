import React from "react";
import Navbar from "./Components/Nav/Navbar.jsx";
import HeroPage from "./Components/Hero/HeroPage.jsx";
import FeaturesPage from "./Components/Features/FeaturesPage.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import Testmo from "./Components/TestimonialPage/Testmo.jsx";
import Cta from "./Components/Cta/Cta.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <FeaturesPage />
      <Courses />
      <Cta />
      <Testmo />
      <Footer />
    </>
  );
};

export default HomePage;
