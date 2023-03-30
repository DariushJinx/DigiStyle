import React, { useState } from "react";
import { Link } from "react-router-dom";
import { amazingDetails } from "../../Data/Data";
import Card from "../Card/Card";

import "./AquaPopular.css";

export default function AquaPopular() {
  let [infos, setInfos] = useState(amazingDetails);
  return (
    <div className="popularBrands__details_bg popularBrands__details_bg_aqua  col-lg-12">
      <div className="popularBrands__details">
        <div className="row justify-content-between flex-row-reverse">
          <div className="popularBrands__name col-lg-3 mt-3 text-center ">
            <img
              src="images/PNG/aqua_png.png"
              alt="aqua_png"
              className="popularBrands__name_logo"
            />

            <div className="popularBrands__name_links mt-3">
              <Link
                to="/popular/aqua"
                className="popularBrands__name_links_link text-decoration-none d-flex align-items-center"
              >
                <span className="ms-3">مشاهده همه محصولات</span>
                <box-icon name="left-arrow-circle"></box-icon>
              </Link>
            </div>
          </div>

          <div className="popularBrands__menu col-lg-9">
            <div className="row">
              {infos.slice(22, 25).map((info) => (
                <Card {...info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
