import React from "react";
import Header from "../componants/Header";
import AboutHero from "./../componants/AboutHero";
import Video from "../componants/Video";
import Experience from "../componants/Experience";
import Footer from "../componants/Footer";
import Faq from "../componants/Faq";

function Testemonial() {
  return (
    <div style={{ background: "#151515" }} className=" overflow-hidden">
      <Header acTive3="nav_tab_onhover" />
      <AboutHero Head="What people say " />
      <Video />
      <Experience />
      <Faq />
      <Footer />
    </div>
  );
}

export default Testemonial;
