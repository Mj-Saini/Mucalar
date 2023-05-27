import React from "react";
import brian from "../assets/img/webp/brian.webp";
import groge from "../assets/img/webp/grorge.webp";

function Team() {
  return (
    <>
      <section className="py-lg-5 mt-5 position-relative">
        <span className="shadow_green_Team position-absolute"></span>
        <span className="shadow_green_Team top-50 start-0 position-absolute"></span>
        <span className="shadow_green_Team top-100 end-0 translate-middle-y position-absolute"></span>

        <div className="container">
          <h2 className="ff_jakarta fw_med fs_4x8l text_white text-center">
            Our Team
          </h2>
          <div className="row flex-lg-row align-items-center justify-content-between py-lg-5">
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="position-relative pt-3 ps-3 z_index1">
                <span
                  style={{ borderRadius: "15px 0" }}
                  className="colored_box_behind_img start-0 z_index--1"
                ></span>
                <img className="w-100" src={brian} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h2 className="ff_jakarta fw_med fs_3x2l text-white position-relative">
                George W. Rozakis, MD
              </h2>
              <p className="ff_roboto fw-normal fs_md text_white opacity_08 mb-0 mt-3 pt-1 pb-1">
                Dr. Rozakis is a board certified biomedical engineer who studied
                medicine at Cornell Medical Center and studied Ophthalmology at
                the Duke Eye Center. Dr. Rozakis worked in the field of Advanced
                Wellness / Functional Medicine & The Optimization of
                Biochemistry for over 15 years. He has applied this science
                age-related chronic conditions. Dr. Rozakis won the advancements
                in healthcare award in Cleveland, Ohio (beating out the
                Cleveland Clinic) in 2015 for his work in Advanced Wellness and
                advocates for this approach to health care to his patients and
                colleagues.
                <span className="d-block mt-3 pt-1">
                  Dr. Rozakis pioneered the field of Lasik refractive surgery,
                  phakic refractive lenses, and the use of hormones and other
                  advanced testing to treat macular degeneration, migraine,
                  parkinson's, arthritis, insomnia, menopause, low testosterone,
                  auto immune disease and other age-related chronic conditions.
                </span>
              </p>
            </div>
          </div>
          <div className="row flex-lg-row align-items-center justify-content-between mt-5 pt-5 position-relative">
            <span
              style={{ margin: "120px 0 0 0" }}
              className="shadow_green4 translate-middle-x position-absolute"
            ></span>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div>
                <h2 className="ff_jakarta fw_med fs_3x2l text-white position-relative">
                  Brian Bakke, Ph.D.
                </h2>
                <p className="ff_roboto fw-normal fs_md text_white opacity_08 mb-0 mt-3 pt-1 pb-1">
                  Dr. Bakke also holds a master’s degree in human nutrition from
                  Columbia University. His master’s thesis work focused on
                  studying the clinical nutrition practice patterns used by eye
                  professionals in the prevention and treatment of Age-Related
                  Macular Degeneration (AMD).
                  <span className="d-block mt-3 pt-1">
                    Prior to partnering with the Advanced Wellness Program
                    through Investihealth, Dr. Bakke spent 6 years working as
                    chief science officer with a medical consulting company. His
                    work as chief science officer focused on collaborating with
                    primary care physicians in developing personalized nutrition
                    and bioidentical hormone based care plans for improving
                    clinical outcomes for patients with complex medical
                    conditions. Previously, Dr. Bakke spent 7 years working with
                    the multi- national chemistry, biotechnology and life
                    science companies BASF and Syngenta as a senior chemist.
                  </span>
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="position-relative p-3 z_index1">
                <span
                  style={{ borderRadius: "0 15px" }}
                  className="colored_box_behind_img z_index--1"
                ></span>
                <img className="w-100 " src={groge} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
