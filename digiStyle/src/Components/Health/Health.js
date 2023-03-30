import React from "react";
import { healthItems } from "../../Data/Data";
import "./Health.css";

export default function Health() {
  return (
    <div className="health">
      <div className="container">
        <div className="row">
          <h2 className="health__title">زیبـــایــی‌ و‌ ســـلـامــت</h2>

          {healthItems.map((info) => (
            <div
              className="health__item col-lg-3 col-md-6 mt-lg-5"
              key={info.id}
            >
              <div className="health__item_details">
                <img
                  src={info.img}
                  alt="health"
                  className="health__item_details_img w-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
