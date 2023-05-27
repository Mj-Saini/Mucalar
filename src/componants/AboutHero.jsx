import React from "react";

import plus from "../assets/img/svg/plus.svg";
import vactor from "../assets/img/svg/eye-vector.svg";
import Header from "./Header";
function AboutHero(props) {
  return (
    <>
      <section
        style={{ background: "#26B49C17" }}
        className="py-5 position-relative mt-3 overflow-hidden"
      >
        <span
          style={{ margin: "70px 0 0 80px" }}
          className="shadow_green_faq start-50 top-50 translate-middle position-absolute"
        ></span>
        <div className="container position-relative">
          <img
            className="position-absolute Anim_RotatePlusIcon aboutHero_Plus d-none d-sm-flex"
            src={plus}
            alt="icon"
          />
          <img
            className="position-absolute aboutHero_eye d-none Anim_RotatePlusIcon d-sm-flex"
            src={vactor}
            alt="icon"
          />
          <img
            className="position-absolute aboutHero_Plus1 d-none Anim_RotatePlusIcon d-sm-flex"
            src={plus}
            alt="icon"
          />{" "}
          <img
            className="position-absolute aboutHero_eye1 d-none Anim_RotatePlusIcon d-sm-flex"
            src={vactor}
            alt="icon"
          />
          <div className="py-5 my-5 z_index1 position-relative">
            <h1 className=" ff_jakarta fw-semibold fs_5x6l text-white text-center">
              {props.Head}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
