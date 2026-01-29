import React from "react";
import ServiceHero from "../components/Services/ServiceHero.jsx";
import ServiceGrid from "../components/Services/ServiceGrid.jsx";
import Advantage from "../components/Services/Advantage.jsx";
import "../css/Services/ServicesGlobal.css";

const Services = () => {
  return (
    <div className="services-page">
      <ServiceHero />
      <ServiceGrid />
      <Advantage />
    </div>
  );
};

export default Services;