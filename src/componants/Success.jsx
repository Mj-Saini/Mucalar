import React from "react";
import success from "../assets/img/webp/success.webp";

function Success() {
  return (
    <>
      <section
        id="Success"
        className=" my-md-5 position-relative py-sm-5 py-4 min_vh_90 d-flex"
      >
        <span className="shadow_green_success position-absolute "></span>

        <img
          className="img_success_position position-absolute d-none d-lg-flex overflow-hidden"
          src={success}
          alt="img"
        />
        <div className="container d-flex flex-grow-1 align-items-center">
          <div className="row align-items-center ">
            <div className="col-lg-6">
              <div className="success_col_bg px-md-4 px-3 py-md-4 py-2">
                <h2 className=" ff_jakarta fw_med fs_4x8l text_white py-1 mb-0">
                  Success: Strive, Thrive, and Shine
                </h2>
                <p className="ff_roboto fw-normal fs_md text_white opacity_07 mb-0 mt-3 pt-1 pb-md-3">
                  When it comes to achieving success, there are certain
                  qualities that can help you reach your goals. Had it not been
                  for our success in many patients we may never have pursued
                  macular degeneration
                </p>
                <button className="ff_jakarta z_index0 fw-semibold text-white mb-2 fs_md square_btn mt-4 position-relative">
                  <span className="  ">Learn More</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img
                className="w-100 d-lg-none z_index1 position-relative"
                src={success}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Success;
