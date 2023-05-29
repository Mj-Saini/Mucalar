import React from "react";
import footerLogo from "../assets/img/svg/logo.svg";
import search from "../assets/img/svg/search.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section style={{ background: "#0E202E" }} id="Footer" className="pt-5">
        <div className="container pt-lg-5">
          <div className="row justify-content-between">
            <div className="col-lg-4 pe-xl-4">
              <a href="#Header">
                <img src={footerLogo} alt="logo" />
              </a>
              <p className=" ff_roboto fw-normal fs_md text-white opacity_07 mb-0 mt-3 pt-1 pe-xl-5">
                Amet minim mollit non deserunt{" "}
                <span className="d-lg-block">
                  ullamco est sit aliqua dolor do amet
                </span>{" "}
                sint. Velit officia consequat duis enim velit
              </p>
              <span className="d-flex gap-3 mt-md-5 mt-4 d-none d-lg-flex">
                <a target="_blank" href="https://www.facebook.com/">
                  <svg
                    className="fill-changer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#23A370" />
                    <path
                      d="M12.9616 14.0632H14.7335L15.4423 11.2281H12.9616V9.81048C12.9616 9.08042 12.9616 8.39289 14.3791 8.39289H15.4423V6.01134C15.2113 5.98086 14.3387 5.91211 13.4173 5.91211C11.4929 5.91211 10.1264 7.08658 10.1264 9.24344V11.2281H8V14.0632H10.1264V20.088H12.9616V14.0632Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </a>
                <a target="_blank" href="https://twitter.com/login">
                  <svg
                    className="fill-changer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#23A370" />
                    <path
                      d="M20.1239 7.74767C19.5781 7.99574 18.9898 8.15877 18.3802 8.23673C19.004 7.86107 19.486 7.26569 19.7128 6.5498C19.1245 6.9042 18.4724 7.15228 17.7848 7.29404C17.2249 6.68448 16.4381 6.33008 15.5451 6.33008C13.8794 6.33008 12.5185 7.69096 12.5185 9.3708C12.5185 9.61179 12.5469 9.8457 12.5965 10.0654C10.0732 9.93784 7.82629 8.7258 6.33074 6.89003C6.06848 7.33657 5.91964 7.86107 5.91964 8.41393C5.91964 9.47004 6.45123 10.4056 7.27343 10.9372C6.77019 10.9372 6.30239 10.7955 5.89129 10.5828V10.6041C5.89129 12.0784 6.9403 13.3117 8.32954 13.5881C7.88351 13.7102 7.41526 13.7272 6.96156 13.6377C7.15408 14.242 7.53111 14.7707 8.03965 15.1496C8.5482 15.5284 9.16269 15.7384 9.79674 15.75C8.72195 16.6008 7.38967 17.0607 6.01887 17.0541C5.77788 17.0541 5.53689 17.04 5.2959 17.0116C6.64261 17.8763 8.24448 18.3796 9.95976 18.3796C15.5451 18.3796 18.6141 13.7441 18.6141 9.7252C18.6141 9.59053 18.6141 9.46295 18.607 9.32828C19.2024 8.903 19.7128 8.36432 20.1239 7.74767Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                  {" "}
                  <svg
                    className="fill-changer"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#23A370" />
                    <path
                      d="M15.279 5.08887H8.89988C7.91329 5.08992 6.96741 5.48231 6.26978 6.17994C5.57216 6.87756 5.17977 7.82344 5.17871 8.81004V15.1892C5.17977 16.1758 5.57216 17.1217 6.26978 17.8193C6.96741 18.5169 7.91329 18.9093 8.89988 18.9103H15.279C16.2656 18.9093 17.2115 18.5169 17.9091 17.8193C18.6067 17.1217 18.9991 16.1758 19.0002 15.1892V8.81004C18.9991 7.82344 18.6067 6.87756 17.9091 6.17994C17.2115 5.48231 16.2656 5.08992 15.279 5.08887ZM12.0895 15.1892C11.4586 15.1892 10.8419 15.0021 10.3174 14.6516C9.7929 14.3012 9.38408 13.803 9.14267 13.2202C8.90126 12.6374 8.8381 11.9961 8.96117 11.3774C9.08424 10.7586 9.38801 10.1903 9.83408 9.74424C10.2802 9.29817 10.8485 8.99439 11.4672 8.87132C12.0859 8.74825 12.7272 8.81142 13.31 9.05283C13.8929 9.29424 14.391 9.70305 14.7415 10.2276C15.092 10.7521 15.279 11.3688 15.279 11.9996C15.2781 12.8453 14.9418 13.656 14.3438 14.254C13.7459 14.852 12.9351 15.1883 12.0895 15.1892ZM16.0764 8.81004C15.9187 8.81004 15.7645 8.76327 15.6334 8.67565C15.5023 8.58803 15.4001 8.4635 15.3397 8.31779C15.2794 8.17209 15.2636 8.01176 15.2943 7.85708C15.3251 7.7024 15.4011 7.56032 15.5126 7.4488C15.6241 7.33728 15.7662 7.26134 15.9209 7.23057C16.0755 7.1998 16.2359 7.21559 16.3816 7.27595C16.5273 7.3363 16.6518 7.4385 16.7394 7.56963C16.827 7.70076 16.8738 7.85493 16.8738 8.01264C16.8738 8.22412 16.7898 8.42694 16.6403 8.57648C16.4907 8.72602 16.2879 8.81004 16.0764 8.81004ZM14.2158 11.9996C14.2158 12.4202 14.0911 12.8313 13.8575 13.181C13.6238 13.5306 13.2917 13.8032 12.9032 13.9641C12.5146 14.1251 12.0871 14.1672 11.6746 14.0851C11.2621 14.0031 10.8833 13.8006 10.5859 13.5032C10.2885 13.2058 10.086 12.8269 10.0039 12.4144C9.92188 12.002 9.96399 11.5744 10.1249 11.1859C10.2859 10.7973 10.5584 10.4652 10.9081 10.2316C11.2578 9.99794 11.6689 9.87323 12.0895 9.87323C12.6534 9.87323 13.1943 10.0973 13.593 10.496C13.9918 10.8948 14.2158 11.4357 14.2158 11.9996Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </a>
              </span>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <div className="row justify-content-between">
                <div className="col-sm-3 col-5">
                  <h3 className="ff_roboto fw-bolder fs_md text-white">
                    Ouick Links
                  </h3>
                  <div className="d-flex flex-column gap-3 mt-3">
                    <span>
                      {" "}
                      <Link
                        to="/"
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#"
                      >
                        Home
                      </Link>
                    </span>
                    <span>
                      {" "}
                      <Link
                        to="/About"
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#"
                      >
                        About
                      </Link>
                    </span>
                    <span>
                      {" "}
                      <a
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#"
                      >
                        Location
                      </a>
                    </span>
                    <span>
                      {" "}
                      <a
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#"
                      >
                        Process
                      </a>
                    </span>
                    <span>
                      {" "}
                      <Link
                        to="/Testimonials"
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#"
                      >
                        Testimonials
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="col-sm-4 col-7">
                  <h3 className="ff_roboto fw-bolder fs_md text-white">
                    Support
                  </h3>
                  <div className="d-flex flex-column gap-3 mt-3">
                    <span>
                      {" "}
                      <a
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="tel:+0 00 000 0000"
                      >
                        +0 00 000 0000
                      </a>
                    </span>
                    <span>
                      {" "}
                      <a
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="mailto:info@macularpro.com"
                      >
                        info@macularpro.com
                      </a>
                    </span>
                    <span>
                      {" "}
                      <a
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#"
                      >
                        Contact
                      </a>
                    </span>
                    <span>
                      <a
                        className="ff_roboto fw-normal fs_md opacity_07 text_white"
                        href="#Faq"
                      >
                        Faq
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-4 mt-4 mt-sm-0">
                  <div className="d-flex flex-column">
                    {" "}
                    <h3 className=" ff_roboto fw-bolder fs_md text-white mb-0 d-none d-lg-flex">
                      Search
                    </h3>
                    <div className="d-flex flex-column gap-3 mt-2 d-none d-lg-flex">
                      <div className="search_bar pe-1 d-flex justify-content-between py-1">
                        <input
                          className="w-100 ps-2 bg-transparent border-0"
                          placeholder="Search"
                          type="text"
                        />
                        <span
                          style={{
                            background: "#00FFCC80",
                            borderRadius: "4px",
                          }}
                          className="p-2"
                        >
                          <img
                            className="cursor_pointer"
                            src={search}
                            alt="icon"
                          />
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-lg-4 ff_roboto fw-bolder fs_md text-white">
                      Legal
                    </h3>
                    <div className="d-flex flex-column gap-3 mt-3">
                      {" "}
                      <span>
                        {" "}
                        <a
                          className=" ff_roboto fw-normal fs_md opacity_07 text_white"
                          href="#"
                        >
                          Terms of Service
                        </a>
                      </span>
                      <span>
                        {" "}
                        <a
                          className="ff_roboto fw-normal fs_md opacity_07 text_white"
                          href="#"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </div>
                  </div>
                  <h3 className=" ff_roboto fw-bolder fs_md text-white d-lg-none mt-4 ">
                    Search
                  </h3>
                  <div className="d-flex flex-column gap-3 mt-3 d-lg-none">
                    <div className="search_bar pe-1 d-flex justify-content-between">
                      <input
                        className="w-100 ps-2 bg-transparent border-0"
                        type="text"
                        placeholder="Search"
                      />
                      <span
                        style={{
                          background: "#00FFCC80",
                          borderRadius: "4px",
                        }}
                        className="p-2"
                      >
                        <img
                          className="cursor_pointer"
                          src={search}
                          alt="icon"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="d-flex gap-3 mt-md-5 mt-4 justify-content-center d-lg-none">
            <a target="_blank" href="https://www.facebook.com/">
              <svg
                className="fill-changer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#23A370" />
                <path
                  d="M12.9616 14.0632H14.7335L15.4423 11.2281H12.9616V9.81048C12.9616 9.08042 12.9616 8.39289 14.3791 8.39289H15.4423V6.01134C15.2113 5.98086 14.3387 5.91211 13.4173 5.91211C11.4929 5.91211 10.1264 7.08658 10.1264 9.24344V11.2281H8V14.0632H10.1264V20.088H12.9616V14.0632Z"
                  fill="#FBFBFB"
                />
              </svg>
            </a>
            <a target="_blank" href="https://twitter.com/login">
              <svg
                className="fill-changer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#23A370" />
                <path
                  d="M20.1239 7.74767C19.5781 7.99574 18.9898 8.15877 18.3802 8.23673C19.004 7.86107 19.486 7.26569 19.7128 6.5498C19.1245 6.9042 18.4724 7.15228 17.7848 7.29404C17.2249 6.68448 16.4381 6.33008 15.5451 6.33008C13.8794 6.33008 12.5185 7.69096 12.5185 9.3708C12.5185 9.61179 12.5469 9.8457 12.5965 10.0654C10.0732 9.93784 7.82629 8.7258 6.33074 6.89003C6.06848 7.33657 5.91964 7.86107 5.91964 8.41393C5.91964 9.47004 6.45123 10.4056 7.27343 10.9372C6.77019 10.9372 6.30239 10.7955 5.89129 10.5828V10.6041C5.89129 12.0784 6.9403 13.3117 8.32954 13.5881C7.88351 13.7102 7.41526 13.7272 6.96156 13.6377C7.15408 14.242 7.53111 14.7707 8.03965 15.1496C8.5482 15.5284 9.16269 15.7384 9.79674 15.75C8.72195 16.6008 7.38967 17.0607 6.01887 17.0541C5.77788 17.0541 5.53689 17.04 5.2959 17.0116C6.64261 17.8763 8.24448 18.3796 9.95976 18.3796C15.5451 18.3796 18.6141 13.7441 18.6141 9.7252C18.6141 9.59053 18.6141 9.46295 18.607 9.32828C19.2024 8.903 19.7128 8.36432 20.1239 7.74767Z"
                  fill="#FBFBFB"
                />
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              {" "}
              <svg
                className="fill-changer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#23A370" />
                <path
                  d="M15.279 5.08887H8.89988C7.91329 5.08992 6.96741 5.48231 6.26978 6.17994C5.57216 6.87756 5.17977 7.82344 5.17871 8.81004V15.1892C5.17977 16.1758 5.57216 17.1217 6.26978 17.8193C6.96741 18.5169 7.91329 18.9093 8.89988 18.9103H15.279C16.2656 18.9093 17.2115 18.5169 17.9091 17.8193C18.6067 17.1217 18.9991 16.1758 19.0002 15.1892V8.81004C18.9991 7.82344 18.6067 6.87756 17.9091 6.17994C17.2115 5.48231 16.2656 5.08992 15.279 5.08887ZM12.0895 15.1892C11.4586 15.1892 10.8419 15.0021 10.3174 14.6516C9.7929 14.3012 9.38408 13.803 9.14267 13.2202C8.90126 12.6374 8.8381 11.9961 8.96117 11.3774C9.08424 10.7586 9.38801 10.1903 9.83408 9.74424C10.2802 9.29817 10.8485 8.99439 11.4672 8.87132C12.0859 8.74825 12.7272 8.81142 13.31 9.05283C13.8929 9.29424 14.391 9.70305 14.7415 10.2276C15.092 10.7521 15.279 11.3688 15.279 11.9996C15.2781 12.8453 14.9418 13.656 14.3438 14.254C13.7459 14.852 12.9351 15.1883 12.0895 15.1892ZM16.0764 8.81004C15.9187 8.81004 15.7645 8.76327 15.6334 8.67565C15.5023 8.58803 15.4001 8.4635 15.3397 8.31779C15.2794 8.17209 15.2636 8.01176 15.2943 7.85708C15.3251 7.7024 15.4011 7.56032 15.5126 7.4488C15.6241 7.33728 15.7662 7.26134 15.9209 7.23057C16.0755 7.1998 16.2359 7.21559 16.3816 7.27595C16.5273 7.3363 16.6518 7.4385 16.7394 7.56963C16.827 7.70076 16.8738 7.85493 16.8738 8.01264C16.8738 8.22412 16.7898 8.42694 16.6403 8.57648C16.4907 8.72602 16.2879 8.81004 16.0764 8.81004ZM14.2158 11.9996C14.2158 12.4202 14.0911 12.8313 13.8575 13.181C13.6238 13.5306 13.2917 13.8032 12.9032 13.9641C12.5146 14.1251 12.0871 14.1672 11.6746 14.0851C11.2621 14.0031 10.8833 13.8006 10.5859 13.5032C10.2885 13.2058 10.086 12.8269 10.0039 12.4144C9.92188 12.002 9.96399 11.5744 10.1249 11.1859C10.2859 10.7973 10.5584 10.4652 10.9081 10.2316C11.2578 9.99794 11.6689 9.87323 12.0895 9.87323C12.6534 9.87323 13.1943 10.0973 13.593 10.496C13.9918 10.8948 14.2158 11.4357 14.2158 11.9996Z"
                  fill="#FBFBFB"
                />
              </svg>
            </a>
          </span>
        </div>
        <div className="border_bottom w-100 mt-lg-5 pt-sm-5 pt-4"></div>
        <p className="ff_roboto fw-normal fs_md text-white text-center opacity_08 mb-0 py-3">
          MacularProgram© 2023 | All Rights Reserved
        </p>
      </section>
    </>
  );
}

export default Footer;
