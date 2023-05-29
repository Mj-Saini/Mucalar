import React from "react";
import vector from "../assets/img/svg/our vector.svg";

function Journey() {
  return (
    <>
      <section className="py-5 my-md-5 position-relative">
        <span className="shadow_green5 position-absolute"></span>
        <span className="shadow_green3 position-absolute end-0 top-50 translate-middle-y"></span>
        <div className="container">
          <h2 className="ff_jakarta fw-normal fs_4x8l text_white text-center z_index1 position-relative mb-0">
            <span className="position-relative">
              Our
              <img
                className="arrow_vector_over_text position-absolute start-0 pe-5 me-5 translate-middle-x z_index--1"
                src={vector}
                alt="img"
              />
            </span>
            &nbsp; Journey
          </h2>
          <div className="mt-5 position-relative varticle_line_roadmap">
            <span className="shadow_green4 position-absolute top-100 mt-5 translate-middle-y pt-5"></span>

            <div className="row mt-4 mt-md-0 justify-content-end ">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="col-md-5 col-sm-9 z_index3 position-relative"
              >
                <div className="position-relative hoeizontl_line_Roadmap  ">
                  <div className=" position-relative z_index6 border_onHover roadmap_cards py-4 px-4">
                    <div className="Layer_Overflow_TImeline"></div>
                    <div className="position-relative ">
                      <h4 className=" position-relative z_index4 ff_jakarta fw-med fs_2x4l text-white py-2">
                        16 May, 2013
                      </h4>
                      <p className=" position-relative z_index4 ff_roboto fw-normal fs_md text_white opacity_08 mb-0 pb-4">
                        My mother had macular degeneration for the last 15
                        years. After conducting research on the disease, I
                        successfully treated her, and she showed improvement
                        within six months.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 mt-md-0 justify-content-end justify-content-md-start ">
              <div className="col-md-5 col-sm-9 ">
                <div
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="hoeizontl_line_Roadmap2 position-relative border_onHover roadmap_cards py-4 px-4"
                >
                  <div className="Layer_Overflow_TImeline"></div>
                  <div className=" position-relative pe-lg-2">
                    <h4 className=" position-relative z_index4 ff_jakarta fw-med fs_2x4l text-white py-2">
                      2015
                    </h4>
                    <p className=" position-relative z_index4 ff_roboto fw-normal fs_md text_white opacity_08 mb-0 pe-lg-4">
                      A patient named Paddy did not respond to injections for
                      her eye treatment. I conducted research and found an
                      alternative treatment that did not involve injections. As
                      a result, Paddy's vision improved, and she was able to see
                      clearly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4 mt-md-0 justify-content-end ">
              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="col-md-5 col-sm-9 position-relative z_index6"
              >
                <div className=" position-relative hoeizontl_line_Roadmap  border_onHover roadmap_cards py-4 px-4 ">
                  <div className="Layer_Overflow_TImeline"></div>
                  <div className=" position-relative ">
                    <h4 className=" position-relative z_index4 ff_jakarta fw-med fs_2x4l text-white py-2">
                      2017
                    </h4>
                    <p className=" position-relative z_index4 ff_roboto fw-normal fs_md text_white opacity_08 mb-0 pb-5">
                      In 2017, I studied migraines and worked with 69 patients.
                      Within three to six months of treatment, 54 patients
                      showed improvement in their vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 mt-md-0 justify-content-end justify-content-md-start ">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="col-md-5 col-sm-9 "
            >
              <div className="hoeizontl_line_Roadmap2 position-relative  border_onHover roadmap_cards py-4 px-4">
                <div className="Layer_Overflow_TImeline"></div>
                <div className=" position-relative ">
                  <h4 className=" position-relative z_index4 ff_jakarta fw-med fs_2x4l text-white py-2">
                    2021
                  </h4>
                  <p className=" position-relative z_index4 ff_roboto fw-normal fs_md text_white opacity_08 mb-0">
                    In 2020, I studied 365 cases of eye disease and conducted
                    research on them. In 2021, I conducted a test based on my
                    research, and the results showed a recovery rate of 48% for
                    dry AMD and 60% for wet AMD patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
