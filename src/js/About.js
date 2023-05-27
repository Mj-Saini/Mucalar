import React from "react";
import Journey from "../componants/Journey";
import Footer from "../componants/Footer";
import Faq from "../componants/Faq";
import Program from "../componants/Program";
import Review from "../componants/Review";
import Team from "../componants/Team";
import Recovery from "../componants/Recovery";
import Success from "../componants/Success";
import AboutHero from "../componants/AboutHero";
import Header from "../componants/Header";

function About() {
  return (
    <div style={{ background: "#151515" }} className=" overflow-hidden">
      <Header acTive2="nav_tab_onhover" />
      <AboutHero Head="About Us " />
      <Journey />
      <Team />
      <Recovery />
      <Success />
      <Review />
      <Faq bgColor="faq_bg_color" />
      <Footer />
    </div>
  );
}

export default About;
