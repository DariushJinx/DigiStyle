import React, { useState } from "react";

import { SwiperSlide } from "swiper/react";

import { amazingDetails } from "../../Data/Data";
import { Link, NavLink } from "react-router-dom";
import SwiperGrab from "../SwiperGrab/SwiperGrab";

import Card from "../Card/Card";
import "./BestSeller.css";
export default function BestSeller() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="bestSeller">
      <div className="container">
        <div className="row">
          <div className="bestSeller__right col-lg-3">
            <div className="bestSeller__right_details flex-lg-column justify-content-between align-items-lg-baseline h-75">
              <div className="bestSeller__right_details_desc">
                <span className="bestSeller__right_details_desc_desc d-block">
                  پر فروش
                </span>
                <span className="bestSeller__right_details_desc_desc d-block my-3">
                  تریـن‌های
                </span>
                <span className="bestSeller__right_details_desc_desc d-block">
                  اخیر
                </span>
              </div>

              <div className="bestSeller__right_details_btns">
                <Link
                  to="/best-seller"
                  className="bestSeller__right_details_btns_btn btn btn-outline-dark"
                >
                  مشاهده همه
                </Link>
              </div>
            </div>
          </div>

          <div className="bestSeller__left col-lg-9">
            <SwiperGrab>
              {infos.slice(15, 19).map((info) => (
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
