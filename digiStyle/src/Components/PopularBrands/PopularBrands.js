import React from "react";
import { Link, useParams } from "react-router-dom";
import { amazingDetails } from "../../Data/Data";
import AquaPopular from "../AquaPopular/AquaPopular";
import TechnicPopular from "../TechnicPopular/TechnicPopular";

import "./PopularBrands.css";
export default function PopularBrands() {
  let params = useParams();

  let mainPopular = amazingDetails.find(
    (info) => info.technic == params.popularName
  );

  return (
    <div className="popularBrands my-5 d-sm-none d-xxl-block">
      <div className="container">
        <div className="row">
          <div className="popularBrands__title col-lg-12 d-flex justify-content-between align-items-center">
            <div className="popularBrands__title_brand">
              <h2 className="popularBrands__title_brand_title">
                محــبوبــــ‌ترینــ بــرنــدها
              </h2>
            </div>

            <div className="popularBrands__title_links">
              <Link
                to="/brands"
                className="popularBrands__title_links_link text-decoration-none d-flex align-items-center"
              >
                <span className="ms-3">مشاهده همه برند ها</span>
                <box-icon name="left-arrow-circle"></box-icon>
              </Link>
            </div>
          </div>

          {mainPopular && <TechnicPopular />}

          <AquaPopular />
        </div>
      </div>
    </div>
  );
}
