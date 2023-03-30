import React, { useState } from "react";
import Card from "../Card/Card";

import { SwiperSlide } from "swiper/react";

import { amazingDetails } from "../../Data/Data";
import { NavLink } from "react-router-dom";
import SwiperGrab from "../SwiperGrab/SwiperGrab";

import "./AmazingSection.css";

export default function AmazingSection() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="amazing">
      <div className="container">
        <div className="row">
          <div className="amazing__right col-lg-3">
            <div className="amazing__right_details flex-lg-column align-items-lg-start justify-content-lg-between">
              <div className="amazing__right_details_image">
                <img
                  src="images/SVG/amazing.svg"
                  alt="amazing"
                  className="amazing__right_details_image_img"
                />
              </div>

              <div className="amazing__right_details_button">
                <NavLink
                  to="/amazing"
                  className="amazing__right_details_button_link"
                >
                  مشاهده همه
                </NavLink>
              </div>
            </div>
          </div>

          <div className="amazing__left col-lg-9">
            <div className="amazing__left_swiper">
              <SwiperGrab>
                {infos.slice(0, 4).map((info) => (
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
  );
}
