import React from "react";

import { digiDatas } from "../../Data/Data";

import "./DigiMeg.css";
export default function DigiMeg() {
  return (
    <div className="digiMeg mb-5">
      <div className="container">
        <div className="row">
          <h2 className="digiMeg__title">دیجی‌استایل در دیجی‌مگ</h2>

          <div className="digiMeg__details col-lg-12 mt-5">
            <div className="row">
              {digiDatas.map((data) => (
                <div className="digiMeg__details_items col-lg-3 col-md-6 mt-sm-5 mt-md-3">
                  <div className="digiMeg__details_items_item">
                    <div className="digiMeg__details_items_item_image">
                      <img
                        src={data.img}
                        alt="digimeg"
                        className="digiMeg__details_items_item_image_img w-100"
                      />
                    </div>

                    <div className="digiMeg__details_items_item_desc px-2">
                      <h3 className="digiMeg__details_items_item_desc_title my-3">
                        {data.title}
                      </h3>

                      <p className="digiMeg__details_items_item_desc_par pb-3">
                        {data.par}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
