import React, { useState } from "react";

import { SwiperSlide } from "swiper/react";

import { amazingDetails } from "../../Data/Data";
import { Link, NavLink } from "react-router-dom";
import SwiperGrab from "../SwiperGrab/SwiperGrab";

import "./RecentVisit.css";
import Card from "../Card/Card";

export default function RecentVisit() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="recentVisit my-5">
      <div className="container">
        <div className="row">
          <div className="recentVisit__right col-lg-3">
            <div className="recentVisit__right_details flex-lg-column justify-content-between align-items-lg-baseline h-75">
              <div className="recentVisit__right_details_desc">
                <span className="recentVisit__right_details_desc_desc d-block">
                  بازدید های
                </span>
                <span className="recentVisit__right_details_desc_desc d-block my-3">
                  اخیر
                </span>
                <span className="recentVisit__right_details_desc_desc d-block">
                  شما
                </span>
              </div>

              <div className="recentVisit__right_details_btns">
                <Link
                  to="/recent-visit"
                  className="recentVisit__right_details_btns_btn btn btn-outline-dark"
                >
                  مشاهده همه
                </Link>
              </div>
            </div>
          </div>

          <div className="recentVisit__left col-lg-9">
            <SwiperGrab>
              {infos.slice(19, 25).map((info) => (
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
