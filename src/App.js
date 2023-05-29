import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./js/Home";
import About from "./js/About";
import Testemonial from "./js/Testemonial";
import { useEffect } from "react";
import Loader from "./componants/Loader";
import BackToTop from "./componants/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div style={{ zIndex: "123000", background: "#000", position: "fixed" }}>
        {" "}
        <Loader />
      </div>
      <BackToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<Testemonial />} />
      </Routes>
    </>
  );
}

export default App;
