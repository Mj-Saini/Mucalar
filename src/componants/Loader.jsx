import React, { useEffect, useState } from "react";
function Loader() {
  const [loader, setloader] = useState(0);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 3000);
  }, []);
  {
    if (loader === 0) {
      document.body.style.overflow = "hidden";
      document.documentElement.scrollTop = 0;
    } else {
      document.body.style.overflow = "initial";
      document.documentElement.scrollTop = 0;
    }
  }
  return (
    <>
      {loader ? (
        <section
          style={{ background: "#172e2b" }}
          className="preloader position-fixed w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
        >
          <div className="loader"></div>;
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loader;
