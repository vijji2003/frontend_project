import React from "react";
import Hero from "../components/Home/Hero.jsx";
import Features from "../components/Home/Fearures.jsx";
import About from "../components/Home/About.jsx";
import CTA from "../components/Home/CTA.jsx";
import "../css/home/HomeGlobal.css";

function Home() {
  return (
    <div className="home-main-wrapper">
      <Hero />
      <Features />
      <About />
      <CTA />
    </div>
  );
}

export default Home;