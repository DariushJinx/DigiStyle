import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { styleData } from "../../Data/Data";
import Card from "../Card/Card";
import SwiperGrab from "../SwiperGrab/SwiperGrab";
import "./StyleSection.css";
export default function StyleSection() {
  let [infos, setInfos] = useState(styleData);

  return (
    <div className="style position-relative">
      <div className="style__frame"></div>
      <div className="container">
        <div className="row">
          <div className="style__week d-flex align-items-center justify-content-between col-lg-12 pt-4">
            <h2 className="style__week_title">اســتـایلـــ هـفتـــه</h2>

            <div className="style__week_button bg-white">
              <button className="btn btn-outline-dark py-2 px-5">
                خرید همه
              </button>
            </div>
          </div>

          <div className="style__slider mt-5 col-lg-12 pb-4">
            <div className="row">
              <div className="style__slider_right col-lg-4">
                <img
                  src="images/JPEG/styles/style__right.jpg"
                  alt="style__right"
                  className="style__slider_right_img w-100"
                />
              </div>

              <div className="style__slider_left col-lg-8">
                <SwiperGrab>
                  {infos.map((info) => (
                    <SwiperSlide className="amazing__slide">
                      <NavLink
                        to={`/card-item/${info.id}}`}
                        className="card__link text-decoration-none px-0 text-black col-lg-4 py-3"
                      >
                        <Card {...info} />
                      </NavLink>
                    </SwiperSlide>
                  ))}
                </SwiperGrab>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
