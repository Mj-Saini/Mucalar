import React, { useState } from "react";
import Slider from "react-slick";
import img1 from "../assets/img/webp/img1.webp";
import img2 from "../assets/img/webp/img2.webp";
import img3 from "../assets/img/webp/im3.webp";

const images = [img1, img2, img3];

function Disease() {
  const [Index, setIndex] = useState(0);

  let Next = () => {
    if (Index < images.length - 1) {
      setIndex(Index + 1);
    }
  };

  let Prev = () => {
    if (Index > 0) {
      setIndex(Index - 1);
    }
  };
  return (
    <>
      <section
        id="Disease"
        className=" py-lg-5 mt-5 position-relative min_vh__100 d-flex"
      >
        <span className="shadow_green3 position-absolute"></span>
        <span className="shadow_green4 position-absolute"></span>
        <div className="container ">
          <div
            style={{ background: " #27BBA214", borderRadius: "20px" }}
            className="h-100"
          >
            <div
              style={{
                background: "rgba(0, 0, 0, 0.14)",
                borderRadius: "20px 20px 0 0 ",
              }}
              className="py-4"
            >
              <h2 className="ff_jakarta fw_med fs_4x8l text-white opacity_09 text-center mb-0 pt-3 px-3">
                Symptoms of the disease
              </h2>
              <p className="ff_roboto fw-normal fs_md text_white opacity_07 text-center mb-0 mt-2 pt-1 pb-3 px-3">
                Macular degeneration is a progressive eye disease that can cause
                a range of problems, including:
              </p>
            </div>
            <div className="row align-items-center py-md-5 pt-5 pt-md-0">
              <div className="col-xxl-7 col-lg-6 h-100">
                <div className="px-4 py-md-5 z_index1 position-relative d-flex flex-column align-items-center justify-content-center align-items-lg-start">
                  <h2 className="ff_jakarta fw_med fs_3x2l text-white px-md-3 text-center text-lg-start">
                    Blurred or distorted central vision
                  </h2>
                  <p className="ff_roboto fw-normal fs_md text_white opacity_07 mb-0 mt-2 pt-1 px-md-3 text-center text-lg-start">
                    This is one of the primary symptoms of macular degeneration.
                    As the disease progresses, it can cause the vision to become
                    increasingly blurred or distorted, making it difficult to
                    read, recognize faces, or perform other tasks that require
                    clear vision.
                  </p>
                  <span className="px-3 d-flex gap-3 mt-lg-5 mt-4">
                    <svg
                      onClick={() => {
                        Prev();
                      }}
                      style={{ rotate: "180deg" }}
                      className="fill-changer cursor_pointer el"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17.9247"
                        cy="18.0043"
                        r="17.6415"
                        fill=""
                        stroke-width="0.801887"
                        stroke="#27BBA2"
                      />
                      <path
                        d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                        fill="#27BBA2"
                      />
                    </svg>
                    <svg
                      onClick={() => {
                        Next();
                      }}
                      className="fill-changer cursor_pointer"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="17.9247"
                        cy="18.0043"
                        r="17.6415"
                        fill=""
                        stroke-width="0.801887"
                        stroke="#27BBA2"
                      />
                      <path
                        d="M15.4186 10.7071L22.1745 17.4429C22.2547 17.5231 22.3116 17.61 22.3453 17.7035C22.379 17.7971 22.3955 17.8973 22.395 18.0042C22.395 18.1112 22.3784 18.2114 22.3453 18.3049C22.3121 18.3985 22.2552 18.4854 22.1745 18.5656L15.4186 25.3215C15.2315 25.5086 14.9976 25.6021 14.7169 25.6021C14.4363 25.6021 14.1957 25.5019 13.9952 25.3014C13.7948 25.1009 13.6945 24.867 13.6945 24.5998C13.6945 24.3325 13.7948 24.0986 13.9952 23.8981L19.8891 18.0042L13.9952 12.1104C13.8081 11.9233 13.7146 11.6926 13.7146 11.4183C13.7146 11.1441 13.8148 10.907 14.0153 10.7071C14.2158 10.5066 14.4496 10.4064 14.7169 10.4064C14.9842 10.4064 15.2181 10.5066 15.4186 10.7071Z"
                        fill="#27BBA2"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-6 mt_costom pt-lg-0 mt-lg-0">
                <div
                  onClick={() => {
                    Next();
                  }}
                  className="w-100 my-sm- h-100 pb-sm-0 py-lg-2 z_index1 position-relative d-flex justify-content-center justify-content-lg-start transform_middlex"
                >
                  <img
                    className="first_slide z_index4 py-4"
                    src={images[Index]}
                    alt="slider"
                  />
                  <img
                    className="middle_slide z_index3 py-4"
                    src={images[Index + 1]}
                    alt="slider"
                  />
                  <img
                    className="last_slide z_index2   py-4"
                    src={images[Index + 2]}
                    alt="slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Disease;
