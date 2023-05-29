import React from "react";
import plus from "../assets/img/svg/plus.svg";
import vactor from "../assets/img/svg/eye-vector.svg";

function OPtimize() {
  return (
    <>
      <section id="Optimize" className="position-relative py-lg-5 my-4">
        <img
          className="position-absolute Anim_RotatePlusIcon symble_vector_position d-none d-sm-flex"
          src={plus}
          alt="icon"
        />
        <img
          className="position-absolute symble_vector_position2 d-none d-sm-flex"
          src={plus}
          alt="icon"
        />
        <img
          className="position-absolute symble_vector_position3 d-none d-sm-flex"
          src={plus}
          alt="icon"
        />{" "}
        <img
          className="position-absolute symble_vector_position5 d-none d-sm-flex"
          src={vactor}
          alt="icon"
        />
        <img
          className="position-absolute symble_vector_position4 d-none d-sm-flex"
          src={vactor}
          alt="icon"
        />
        <div className="container mt-1">
          <div className="optimize_sec_bg py-sm-5 py-4 px-sm-4 px-2 d-flex flex-column align-items-center z_index1 position-relative overflow-hidden">
            <span className="shadow_green position-absolute top-50 start-50 translate-middle"></span>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="d-flex flex-column align-items-center"
            >
              <h2 className=" ff_jakarta fw_med fs_4x8l text-white text-center mb-0 pt-sm-4 z_index1">
                Optimize Biochemistry
              </h2>
              <p className="ff_roboto fw-normal fs_md text-white text-center opacity_07 mb-0 pt-1 mt-1">
                Lectus adipiscing pulvinar et praesent justo libero luctus
                tortor. A semper feugiat{" "}
                <span className="d-md-block">
                  non dui ut egestas eu. Euismod eu fames ante in vestibulum
                  duis in odio. Amet
                </span>{" "}
                pharetra mauris at pellentesque. Netus libero nulla eu id.
              </p>
              <button className="ff_jakarta fw-semibold text-white fs_md common_btn mt-md-5 mt-4">
                Book Call
              </button>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}

export default OPtimize;
