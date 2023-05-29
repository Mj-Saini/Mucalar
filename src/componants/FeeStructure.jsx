import React from "react";
import Arrow from "../assets/img/svg/arrow-curve1.svg";
import structure from "../assets/img/svg/structure-vector.svg";
import vector from "../assets/img/svg/fee-vector1.svg";

function FeeStructure() {
  return (
    <section className="py-md-5 py-4 my-lg-5 mb-5 mb-lg-0 position-relative">
      <span className="shadow_green3 position-absolute translate-middle z_index--1"></span>
      <span className="shadow_green5 position-absolute top-0 start-0 pb-5 mb-5"></span>

      <div className="container pb-lg-5 mb-4">
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="col-lg-6"
          >
            <h2 className="z-index2 ff_jakarta fw_med fs_4x8l text-white opacity_09 position-relative text-center text-lg-start">
              Fee Structure
              <img
                className="arrow_vector_over_text start-50 translate-middle-x ms-4 ms-lg-0 position-absolute d-none d-sm-flex z_index--1"
                src={Arrow}
                alt="curve-arrow"
              />
            </h2>
            <div className="d-flex justify-content-center py-4 py-lg-5">
              <img src={structure} alt="img" />
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="d-flex flex-column gap-4 z_index1 "
            >
              <img
                className="position-absolute fee_vector_position z_index0 d-none d-sm-flex"
                src={vector}
                alt=""
              />
              <img
                className="position-absolute fee_vector_position1 z_index0 d-none d-sm-flex"
                src={vector}
                alt=""
              />
              <div
                style={{ background: "#25AE8614", borderRadius: "16px" }}
                className="py-4 px-3 z_index3 position-relative border_onHover"
              >
                <h2 className="ff_jakarta fw_med fs_2x4l text-white mb-0">
                  One Time Enrollment $3000/y
                </h2>
                <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-1 pe-lg-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim{" "}
                </p>
              </div>
              <div
                style={{ background: "#25AE8614", borderRadius: "16px" }}
                className="py-4 px-3 z_index1 border_onHover"
              >
                <h2 className=" ff_jakarta fw_med fs_2x4l text-white mb-0">
                  Medical Grade Supplements $80-125/m
                </h2>
                <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-1 pe-lg-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim{" "}
                </p>
              </div>
              <div
                style={{ background: "#25AE8614", borderRadius: "16px" }}
                className="py-4 px-3 z_index1 border_onHover"
              >
                <h2 className=" ff_jakarta fw_med fs_2x4l text-white mb-0">
                  Maintenance $450/ Lab check
                </h2>
                <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-1 pe-lg-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint Velit officia consequat duis enim{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeeStructure;
