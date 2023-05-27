import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./componants/Hero";
import Home from "./js/Home";
import About from "./js/About";
import Testemonial from "./js/Testemonial";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Testimonials" element={<Testemonial />} />
      </Routes>
    </>
  );
}

export default App;
