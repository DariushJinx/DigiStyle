import React from "react";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SwiperSlier.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
export default function SwiperSlier({ children }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
