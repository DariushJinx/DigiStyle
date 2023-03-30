import React, { useState } from "react";
import { Link } from "react-router-dom";
import { amazingDetails } from "../../Data/Data";
import Card from "../Card/Card";
import "./TechnicPopular.css";
export default function TechnicPopular() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="popularBrands__details_bg col-lg-12">
      <div className="popularBrands__details">
        <div className="row justify-content-between">
          <div className="popularBrands__name col-lg-3 mt-3 text-center ">
            <img
              src="images/PNG/popular_07.png"
              alt="popular_07"
              className="popularBrands__name_logo"
            />

            <div className="popularBrands__name_links mt-3">
              <Link
                to="/popular/technic"
                className="popularBrands__name_links_link text-decoration-none d-flex align-items-center"
              >
                <span className="ms-3">مشاهده همه محصولات</span>
                <box-icon name="left-arrow-circle"></box-icon>
              </Link>
            </div>
          </div>

          <div className="popularBrands__menu col-lg-9">
            <div className="row">
              {infos.slice(19, 22).map((info) => (
                <Card {...info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
