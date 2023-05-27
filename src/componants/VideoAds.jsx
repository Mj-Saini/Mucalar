import React, { useState } from "react";
import video from "../assets/img/webp/jenny.webp";
import youbute from "../assets/img/svg/youtube-icon.svg";
import VideoCards from "../js/VideoCards";

function VideoAds() {
  const [showVideo, setShowVideo] = useState(false);
  const handleVideoClick = () => {
    setShowVideo(!showVideo);
  };
  return (
    <section className="py-5 mt-lg-5 position-relative">
      <span className="shadow_green_Team top-0 mt-5 start-0 position-absolute"></span>
      <span className="shadow_green_Team top-100 end-0 translate-middle position-absolute"></span>

      <div className="container">
        <div className="row">
          {VideoCards.map((data) => {
            return (
              <div className="col-md-4 col-sm-6 mt-5">
                <div
                  style={{
                    background: "#27BBA214",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 42px rgba(0, 0, 0, 0.1)",
                  }}
                  className="pb-lg-5 pb-4 border_green_hover h-100"
                >
                  {" "}
                  <div className="video-container d-flex justify-content-center position-relative ">
                    {showVideo ? (
                      <span className="mt-4">{data.iframe}</span>
                    ) : (
                      <div className="position-relative">
                        <img
                          className="w-100 z_index4 rounded-3"
                          src={data.thumbnail}
                          alt="Video Thumbnail"
                          onClick={handleVideoClick}
                        />
                        <img
                          onClick={handleVideoClick}
                          className="ytb_icon cursor_pointer"
                          src={data.icon}
                          alt="icon"
                        />
                      </div>
                    )}
                  </div>
                  <h3 className="ff_jakarta fw_med fs_xl text_white mt-lg-3 mt-2 mb-0 px-3">
                    {data.name}
                  </h3>
                  <p className="ff_roboto fw-normal fs_md text_white mb-0 mt-lg-3 mt-2 px-3">
                    {data.about}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VideoAds;
