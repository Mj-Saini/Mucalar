import React from "react";
import patient from "../assets/img/webp/patient.webp";
import Arrow from "../assets/img/svg/arrow-curve.svg";
import eye from "../assets/img/svg/muscular-eye.svg";
import recovery from "../assets/img/svg/patient-recovery.svg";

function Recovery() {
  return (
    <>
      <section className="py-lg-5 py-4 my-md-5 position-relative ">
        <span className="shadow_green5 position-absolute top-50 translate-middle-y"></span>

        <div className="container py-lg-5 mb-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6 mt-md-5  mt-lg-0">
              <div className="position-relative p-3 z_index1">
                <span className="colored_box_behind_img_bottom z_index--1"></span>
                <img className="w-100" src={patient} alt="img" />
                <div className="d-flex justify-content-center gap-4">
                  <div className="transprant_card_over_img d-flex">
                    <img src={eye} alt="img" />
                    <p className="ff_jakarta fw_med fs_md text_white ms-3 mb-0 ps-1">
                      Macular <span className="d-block"> Degeneration</span>
                    </p>
                  </div>{" "}
                  <div className="transprant_card_over_img_right py-lg-4 px-lg-3 ">
                    <span className="ff_poppins fw-semibold fs_md text_white">
                      <img className="me-2 pe-1" src={recovery} alt="img" />
                      Patient Recover
                    </span>
                    <p className="ff_jakarta fw_med fs_md text_white  mb-0 mt-2">
                      We are using an injection{" "}
                      <span className="d-block">to stop the growth factor</span>{" "}
                      of Retina
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-5 mt-lg-0 ps-lg-0">
              <h2 className=" ff_jakarta fw_med fs_4x8l text-white opacity_09 position-relative mt-5 mt-md-0">
                More than 50% patients recovered
                <img
                  className="arrow_vector_over_text position-absolute start-0 translate-middle me-lg-5 mt-4"
                  src={Arrow}
                  alt="curve-arrow"
                />
              </h2>
              <p className="ff_roboto fw-normal fs_md text_white opacity_07 mb-0 mt-3 pb-3">
                In 2013, We conducted a test with 365 dry and wet AMD patients.
                In this test recovery rate of patients is 48% of dry AMD and 60%
                of wet AMD. Another patient named Paddy, was suffering from dry
                AMD and temporary vision loss. Our strategies cured her and now
                she is living happily.
              </p>
              <button className="ff_jakarta fw-semibold text-white fs_md common_btn mt-4">
                Book Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recovery;
