import React from "react";
import { NavLink } from "react-router-dom";

import "./Card.css";

export default function Card(props) {
  let {
    id,
    img,
    shortTitle,
    rate,
    mainPrice,
    discountPrice,
    discountPercent,
    brand,
    to,
    col,
  } = props;

  return (
    <NavLink
      to={`/${to}/${id}`}
      className={
        col
          ? "card__popular text-decoration-none px-0 text-black col-lg-4 col-md-6 my-5 py-sm-4"
          : "card__link text-decoration-none px-0 text-black col-lg-6 col-xl-3 py-sm-4 mt-5"
      }
    >
      <div className="cardItem position-relative shadow mx-3" key={id}>
        <div className="cardItem__image bg-white">
          <img
            src={img}
            alt="amazing"
            className="cardItem__image_img w-100 p-5"
          />
        </div>

        <div className="cardItem__details bg-white px-2 pt-4 pb-5">
          <div className="cardItem__details_rating d-flex justify-content-between align-items-start">
            <h3 className="cardItem__details_rating_title">{shortTitle}</h3>
            <div className="cardItem__details_rating_flex d-flex align-items-center">
              <span className="cardItem__details_rating_flex_rate">{rate}</span>
              <span className="cardItem__details_rating_rateIcon">
                <box-icon
                  name="star"
                  color="rgba(0,0,0,0.49)"
                  size="xs"
                ></box-icon>
              </span>
            </div>
          </div>

          <div className="cardItem__details_price text-start d-flex justify-content-end my-3">
            <span className="cardItem__details_price_main text-decoration-line-through ms-3 d-block">
              {mainPrice}
            </span>
            <div className="cardItems__details_toman d-flex">
              <span className="cardItem__details_price_discount d-block">
                {discountPrice}{" "}
              </span>
              <span className="cardItem__details_price_toman me-2">تومان</span>
            </div>
          </div>

          <span
            className={
              col
                ? "cardItem__percent_popular position-absolute"
                : "cardItem__percent position-absolute"
            }
          >
            % {discountPercent}
          </span>
          <span className="cardItem__brand position-absolute">{brand}</span>
        </div>
      </div>
    </NavLink>
  );
}
