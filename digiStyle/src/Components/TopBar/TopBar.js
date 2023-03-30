import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./TopBar.css";
export default function TopBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Bar">
      <div className="topBar mt-4 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 topBar__basket ">
              <div className="topBar__basket_right position-relative d-flex align-items-center">
                <div className="topBar__basket_right_details position-relative">
                  <box-icon
                    name="basket"
                    animation="flashing"
                    size="md"
                  ></box-icon>
                  <span className="badge badge-pill rounded-circle bg-danger position-absolute topBar__basket_right_details_badge">
                    0
                  </span>

                  <div className="topBar__basket_hover shadow rounded-3 position-absolute flex-column justify-content-center align-items-center py-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="84"
                      height="133"
                      viewBox="0 0 84 133"
                    >
                      <defs>
                        <filter
                          id="a"
                          width="111.8%"
                          height="250%"
                          x="-5.9%"
                          y="-75%"
                          filterUnits="objectBoundingBox"
                        >
                          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                        </filter>
                      </defs>
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        tran="translate(-3 -8)"
                      >
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M51.125 14.616L29.508 9.888a7 7 0 0 0-8.03 4.33L5.126 56.815A7 7 0 0 0 8.188 65.4l38.773 22.157a3 3 0 0 0 4.29-1.53l24.056-62.67a3 3 0 0 0-2.16-4.006l-14.96-3.268"
                        />
                        <path
                          stroke="#000"
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M50.63 67.48l6.747 2.59c8.492 3.26 18.018-.982 21.278-9.473 3.26-8.492-.982-18.018-9.474-21.278l-13.773-5.287M53.643 68.637l-3.504-1.345M46.174 65.77l-2.57-.987"
                        />
                        <ellipse
                          cx="46.5"
                          cy="137"
                          fill="#E0E0E0"
                          filter="url(#a)"
                          opacity=".499"
                          rx="25.5"
                          ry="2"
                        />
                        <path
                          stroke="#979797"
                          stroke-dasharray="3,3"
                          stroke-linecap="round"
                          d="M60.009 79.954c17.306 3.827 30.777 36.869 6.48 30.04-12.144-3.412-3.234-19.224 6.759-10.71 4.204 3.583 4.002 10.797-.606 21.641M73.505 76.977c4.662 1.116 9.014 4.345 12.406 8.317"
                        />
                      </g>
                    </svg>

                    <h4 className="topBar__basket_hover_title my-3">
                      سبد خرید شما خالی است.
                    </h4>

                    <p className="topBar__basket_hover_desc">
                      شاید این صفحات برای شما جذاب باشند
                    </p>

                    <div className="topBar__basket_hover_links mt-3">
                      <a
                        href="#"
                        className="topBar__basket_hover_links_styles text-decoration-none topBar__basket_hover_links_link"
                      >
                        حراج استایل
                      </a>
                      <div className="vr var__basket mx-3"></div>
                      <a
                        href="#"
                        className="topBar__basket_hover_links_brand text-decoration-none topBar__basket_hover_links_link"
                      >
                        برند های معتبر
                      </a>
                      <div className="vr var__basket mx-3"></div>
                      <a
                        href="#"
                        className="topBar__basket_hover_links_designers text-decoration-none topBar__basket_hover_links_link"
                      >
                        خانه طراحان ایرانی
                      </a>
                    </div>

                    <span className="triangel"></span>
                  </div>
                </div>

                <a
                  href="#"
                  className="topBar__basket_right_login text-decoration-none me-4"
                >
                  وارد شوید
                </a>
              </div>
            </div>

            <div className="col-lg-4 topBar__styles">
              <img
                src="/images/SVG/digistyle.svg"
                alt="digiStyle"
                className="bg-black topBar__styles_img p-2"
              />
            </div>

            <div className="col-lg-3 topBar__search me-auto">
              <div className="topBar__search_details d-flex align-items-center">
                <box-icon name="search-alt" animation="burst"></box-icon>

                <span
                  className="topBar__search_details_search me-2"
                  onClick={handleShow}
                >
                  جستجوی محصولات از 2000 برند
                </span>

                <Offcanvas show={show} onHide={handleClose} placement="top">
                  <Container>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                      <form action="#" className="offcanvas__form">
                        <div className="container">
                          <div className="offcanvas__form_group pb-2 d-flex align-items-center">
                            <box-icon
                              name="search"
                              color="rgba(0,0,0,0.55)"
                              size="md"
                            ></box-icon>
                            <input
                              type="text"
                              className="offcanvas__form_group_input form-control shadow-none"
                              placeholder="جستجو کنید ..."
                            />
                          </div>
                        </div>
                      </form>

                      <div className="offcanvas__mostSearch mt-5 d-flex align-items-center">
                        <box-icon
                          name="hot"
                          type="solid"
                          animation="tada"
                          color="rgba(0,0,0,0.55)"
                        ></box-icon>
                        <h5 className="offcanvas__mostSearch_title me-3">
                          بیشترین جستجوهای اخیر : ‌
                        </h5>
                      </div>
                    </Offcanvas.Body>
                  </Container>
                </Offcanvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
