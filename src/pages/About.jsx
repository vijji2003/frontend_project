import React from "react";

// 1. CSS Imports
import "../css/about/AboutGlobal.css"; 
// (Anni CSS ikkade import cheyakunda, vaati respective JSX files lo import cheyandi)

// 2. Component Imports (Idhi meeru marchipoyaru)
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutVision from "../components/About/AboutVision";
import AboutValues from "../components/About/AboutValues";
import AboutTimeline from "../components/About/AboutTimeline";

function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutStory />
      <AboutVision />
      <AboutValues />
      <AboutTimeline />
    </div>
  );
}

export default About;