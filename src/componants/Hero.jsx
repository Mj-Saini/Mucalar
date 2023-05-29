import React from "react";
import Header from "./Header";
import eyes from "../assets/img/webp/eyes.webp";
import plus from "../assets/img/svg/plus.svg";
import vactor from "../assets/img/svg/eye-vector.svg";
import curve from "../assets/img/svg/curve.svg";

function Hero() {
  return (
    <section
      id="#Hero"
      className="min_vh_100 d-flex flex-column bg_hero_img position-relative pb-5"
    >
      <img
        className="position-absolute Anim_RotatePlusIcon plus_vector_position"
        src={plus}
        alt="icon"
      />
      <img
        className="position-absolute Anim_RotatePlusIconOpp plus_vector_position2"
        src={plus}
        alt="icon"
      />
      <img
        className="position-absolute Anim_RotatePlusIconOpp plus_vector_position3"
        src={plus}
        alt="icon"
      />
      <img
        className="position-absolute Anim_Eye eyes_vector_position"
        src={vactor}
        alt="icon"
      />
      <img
        className="position-absolute Anim_EyeOpp eyes_vector_position2"
        src={vactor}
        alt="icon"
      />
      <span className="shadow_green position-absolute"></span>
      <span className="shadow_green2 position-absolute"></span>
      <Header acTive="nav_tab_onhover" />
      <div className="container flex-grow-1 justify-content-center align-items-center d-flex">
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos-delay="400"
            className="col-md-8 mx-auto"
          >
            <h1 className="ff_jakarta fw-semibold fs_5x6l text-white text-center mt-5 pt-lg-5 z_index1 mb-0">
              Seeing life{" "}
              <span className=" position-relative z_index2 d-inline-block">
                <img
                  className="curve_over_text position-absolute d-none d-md-inline"
                  src={curve}
                  alt=""
                />{" "}
                clearly
              </span>
              , with Macular Program
            </h1>
            <div className="position-relative">
              <img className="w-100" src={eyes} alt="header-img" />
              <div className="d-flex justify-content-center gap-4">
                <p className="ff_jakarta fw_med fs_md text_white Hero_transprant_card_bottom mb-0">
                  No Injection Required
                </p>
                <p className="ff_jakarta fw_med fs_md text_white Hero_transprant_card_top mb-0">
                  Certificated Method
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
