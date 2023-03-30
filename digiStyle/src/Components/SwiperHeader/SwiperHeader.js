import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperSlier from "../SwiperSlier/SwiperSlier";
import { swiperItems } from "../../Data/Data";
import "./SwiperHeader.css";
export default function SwiperHeader() {
  let [infos, setInfos] = useState(swiperItems);
  return (
    <div className="swiperHeader">
      <SwiperSlier>
        {infos.map((info) => (
          <SwiperSlide className="swiperHeader__slide">
            {
              <img
                src={info.img}
                alt="swiper-items"
                className="swiper__header_img"
              />
            }
          </SwiperSlide>
        ))}
      </SwiperSlier>
    </div>
  );
}
