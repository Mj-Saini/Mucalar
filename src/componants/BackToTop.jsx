import React, { useState, useEffect } from "react";
import topimg from "../assets/img/png/backtop.png";

const BackToTop = () => {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div className="me-2">
      <span
        id="btn"
        onClick={() => top()}
        style={{ zIndex: "99" }}
        className={
          backToTop
            ? "btn d-block position-fixed end-0 bottom-0 mb-3 me-2 "
            : "btn d-none position-fixed end-0 bottom-0 mb-2 me-2 "
        }
      >
        <span className="btop_btn">
          {" "}
          <img
            style={{ width: "40px" }}
            className=""
            src={topimg}
            alt="topimg"
          />
        </span>
      </span>
    </div>
  );
};

export default BackToTop;
