import React from "react";
import oldMan from "../assets/img/webp/old-man.webp";
import Arrow from "../assets/img/svg/arrow-vector.svg";

function Methodology() {
  return (
    <>
      <section className="py-lg-5 mt-4 pt-5 position-relative">
        <span className="shadow_green5 position-absolute"></span>

        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between">
            <div className=" col-10 col-sm-10 col-md-8 col-lg-5 mt-5 mt-lg-0">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="position-relative p-3 z_index1"
              >
                <span className="colored_box_behind_img z_index--1"></span>
                <img className="w-100 " src={oldMan} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <h2 className=" ff_jakarta fw_med fs_4x8l text-white opacity_09 position-relative mb-0">
                  Our Methodology
                  <img
                    className="arrow_vector_over_text position-absolute"
                    src={Arrow}
                    alt="curve-arrow"
                  />
                </h2>
                <p className="ff_roboto fw-normal fs_md text_white opacity_07 mb-0 mt-3 pt-1 pb-2">
                  Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                  purus aliquam mauris quis molestie ornare mauris egestas nibh.
                  Arcu sed neque est lacus vivamus mattis libero.
                  <span className="d-block mt-2">
                    Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                    purus aliquam mauris quis molestie ornare mauris egestas
                    nibh. Arcu sed neque est lacus vivamus mattis libero.
                  </span>
                </p>
                <button className="ff_jakarta fw-semibold text-white fs_md common_btn mt-4">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Methodology;
