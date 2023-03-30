import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./CardItemSlider.css";

// import required modules
import { Navigation } from "swiper";


export default function CardItemSlider({ mainData }) {

  let [infos, setInfos] = useState(mainData.images);

  console.log(infos);

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper cardItem__slider"
    >
      {infos.map((info) => (
        <div>
          <SwiperSlide key={info.id} className="cardItem__slider_item ">
            {<img src={info.img} alt={info.alt} className="swiper__img w-100" />}
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}
