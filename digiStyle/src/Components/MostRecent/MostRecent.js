import React, { useState } from "react";

import { SwiperSlide } from "swiper/react";

import { amazingDetails } from "../../Data/Data";
import { Link, NavLink } from "react-router-dom";
import SwiperGrab from "../SwiperGrab/SwiperGrab";

import Card from "../Card/Card";
import "./MostRecent.css";
export default function MostRecent() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="mostRecent my-lg-5">
      <div className="container">
        <div className="row">
          <div className="mostRecent__right col-lg-3">
            <div className="mostRecent__right_details flex-lg-column justify-content-between align-items-lg-baseline h-75">
              <div className="mostRecent__right_details_desc">
                <span className="mostRecent__right_details_desc_desc d-block">
                  جدید
                </span>
                <span className="mostRecent__right_details_desc_desc d-block my-3">
                  تریـن‌های
                </span>
                <span className="mostRecent__right_details_desc_desc d-block">
                  اخیر
                </span>
              </div>

              <div className="mostRecent__right_details_btns">
                <Link
                  to="/most-recent"
                  className="mostRecent__right_details_btns_btn btn btn-outline-dark"
                >
                  مشاهده همه
                </Link>
              </div>
            </div>
          </div>

          <div className="mostRecent__left col-lg-9">
            <SwiperGrab>
              {infos.slice(25, 29).map((info) => (
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
  );
}
