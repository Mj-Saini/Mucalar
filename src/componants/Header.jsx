import React, { useState } from "react";
import logo from "../assets/img/svg/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section id="Header" className="w-100">
      <nav>
        <div className="container ">
          <div className="d-flex justify-content-between align-items-center pt-sm-4 pt-3">
            <ul className="mb-0 p-0">
              <a href="#">
                <img className="logo_size" src={logo} alt="LOGO-ICON" />
              </a>
            </ul>

            <div
              className={
                navShow
                  ? "threeline d-lg-none cursor_pointer"
                  : "threeline d-lg-none cursor_pointer"
              }
              onClick={() => setNavShow(!navShow)}
            >
              <div
                className={navShow ? " falseline1" : "  threelinechild"}
              ></div>
              <div className={navShow ? "falseline" : " threelinechild"}></div>
              <div className={navShow ? "falseline3 " : "threelinechild"}></div>
            </div>
            <ul className="mb-0 p-0 d-flex gap-4 ms-xl-5 d-none d-lg-flex">
              <li>
                <Link
                  className={`ff_jakarta fw-normal fs_md nav_tab_on text-white position-relative opacity_07 transition px-1 ${props.acTive}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className={`ff_jakarta fw-normal nav_tab_on fs_md text-white position-relative opacity_07 transition px-1 ${props.acTive2}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonials"
                  className={`ff_jakarta fw-normal nav_tab_on fs_md text-white position-relative opacity_07 transition px-1 ${props.acTive3}`}
                  href="#"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  className="ff_jakarta fw-normal nav_tab_on fs_md text-white position-relative opacity_07 transition px-1"
                  href="#"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  className="ff_jakarta fw-normal nav_tab_on fs_md text-white position-relative opacity_07 transition px-1"
                  href="#"
                >
                  Process
                </a>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 d-none d-lg-flex">
              <button className="ff_jakarta fw-semibold text-white fs_md common_btn">
                Contact Us
              </button>
            </ul>
          </div>
          <div
            className={
              navShow
                ? "shownav d-flex flex-column justify-content-center align-items-center"
                : "hidenav d-flex flex-column justify-content-center align-items-center"
            }
          >
            <ul className="mb-0 p-0 d-flex gap-4 flex-column justify-content-center align-items-center">
              {" "}
              <li>
                <Link
                  to="/"
                  onClick={() => setNavShow(!navShow)}
                  className="ff_jakarta fw-normal fs_md text-white position-relative transition px-1"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  onClick={() => setNavShow(!navShow)}
                  className="ff_jakarta fw-normal fs_md text-white position-relative transition px-1"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Testimonials"
                  onClick={() => setNavShow(!navShow)}
                  className="ff_jakarta fw-normal fs_md text-white position-relative transition px-1"
                  href="#"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_jakarta fw-normal fs_md text-white position-relative transition px-1"
                  href="#"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNavShow(!navShow)}
                  className="ff_jakarta fw-normal fs_md text-white position-relative transition px-1"
                  href="#"
                >
                  Process
                </a>
              </li>
            </ul>
            <ul className="d-flex gap-1 mb-0 p-0 mb-0 justify-content-center align-items-center mt-4">
              <button className="ff_jakarta fw-semibold text-white fs_md common_btn">
                Contact Us
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
