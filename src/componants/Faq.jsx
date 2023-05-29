import { Accordion } from "react-bootstrap";
import React, { useState } from "react";
import arrow from "../assets/img/svg/arrow-forward.svg";
import vector from "../assets/img/svg/faq-vector.svg";

function Faq(props) {
  const [activeTab, setActiveTab] = useState("Customer");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section
        id="Faq"
        className={`pb-lg-5 pb-4 pt-3 position-relative overflow-hidden ${props.bgColor}`}
      >
        <span
          style={{ margin: "70px 0 0 80px" }}
          className={`shadow_green_faq position-absolute ${props.hide}`}
        ></span>
        <div className="container py-5">
          <h2 className="ff_jakarta fw_med fs_4x8l text-white text-center opacity_09 mb-0 z_index1 position-relative">
            <span className="position-relative">
              Frequently
              <img
                className={`position-absolute top-0 start-0 translate-middle ms-5 ps-5 mb-5 z_index--1 ${props.hideVector} `}
                src={vector}
                alt="vector"
              />
            </span>
            &nbsp; Asked Questions
          </h2>
          <div className="row mt-md-5 mt-4">
            <div className="col-lg-4">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="pe-lg-2 d-flex flex-column flex-sm-row flex-lg-column mt-4 justify-content-between"
              >
                <div
                  className={
                    activeTab === "Customer"
                      ? "Faq_btn active d-flex cursor_pointer justify-content-between active gap-sm-5"
                      : "d-flex cursor_pointer justify-content-between Faq_btn gap-sm-5"
                  }
                  onClick={() => handleTabClick("Customer")}
                >
                  <h3 className="ff_roboto fw-semibold fs_xl text_white mb-0">
                    Customer Questions
                  </h3>
                  <img src={arrow} alt="forword-arrow" />
                </div>
                <div
                  className={
                    activeTab === "Tech"
                      ? "Faq_btn active d-flex cursor_pointer justify-content-between active"
                      : "d-flex cursor_pointer justify-content-between Faq_btn"
                  }
                  onClick={() => handleTabClick("Tech")}
                >
                  <h3 className="ff_roboto fw-semibold fs_xl text_white mb-0">
                    Tech Support Questions
                  </h3>
                  <img src={arrow} alt="forword-arrow" />
                </div>
              </div>
            </div>
            {activeTab === "Customer" && (
              <div className="col-lg-8 mt-4 mt-lg-0">
                <div className="ps-lg-4">
                  <Accordion
                    className="Faq_accordion"
                    defaultActiveKey=""
                    flush
                  >
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className=" Accordion_items position-relative py-4"
                      eventKey="0"
                    >
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          How long does it take to see improvements with dry
                          AMD?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="1"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          Do I need to continue to take the program to sustain
                          the <span className="d-lg-block"> benfits?</span>
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="3"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          Do Blood Tests Improve?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="4"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          How do you decrease the frequency of injections for
                          Wet AMD.
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="5"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          Is this Anti-Aging Medicine?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="5"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          What would slow improvement in Dry or Wet AMD?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            )}
            {activeTab === "Tech" && (
              <div className="col-lg-8 mt-4 mt-lg-0">
                <div className="ps-lg-4">
                  <Accordion
                    className="Faq_accordion"
                    defaultActiveKey=""
                    flush
                  >
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className=" Accordion_items position-relative py-4"
                      eventKey="0"
                    >
                      <Accordion.Header className="accordion_Header">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          How long does it take to see improvements with dry
                          AMD?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="1"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          Do I need to continue to take the program to sustain
                          the <span className="d-lg-block"> benfits?</span>
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="3"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          Do Blood Tests Improve?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="4"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          How do you decrease the frequency of injections for
                          Wet AMD.
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="5"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          Is this Anti-Aging Medicine?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="Accordion_items position-relative py-4"
                      eventKey="5"
                    >
                      <Accordion.Header className="Accordion_Body">
                        <h2 className="ff_jakarta fw_med fs_xl text-white mb-0">
                          What would slow improvement in Dry or Wet AMD?
                        </h2>
                      </Accordion.Header>
                      <Accordion.Body className="Accordion_Body">
                        <p className="ff_jakarta fw-normal fs_sm text-white mb-0 mt-1">
                          Viverra metus viverra rhoncus eget quam suspendisse
                          diam amet, nisl. Mattis maecenas
                          <span className=" d-lg-block">
                            libero lacinia accumsan amet. Quam quam egestas
                            feugiat amet. Ut nibh vulputate.
                          </span>
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
