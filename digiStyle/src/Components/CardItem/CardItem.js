import React, { useState } from "react";
import { amazingDetails } from "../../Data/Data";
import CardItemSlider from "../CardItemSlider/CardItemSlider";
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";
import FooterSection from "../FooterSection/FooterSection";
import { useParams } from "react-router-dom";
import "./CardItem.css";
import SwiperGrab from "../SwiperGrab/SwiperGrab";
import Card from "../Card/Card";
import { SwiperSlide } from "swiper/react";
export default function CardItem() {
  let params = useParams();

  let mainData = amazingDetails.find((detail) => {
    return detail.id == params.cardID;
  });

  let [size, setSize] = useState("");

  let similarInofs = mainData.similar;

  return (
    <div className="cardItem">
      <TopBar />
      <NavBar />

      <div className="cardItem__desc">
        <div className="container">
          <div className="row">
            <div className="cardItem__desc_slider col-lg-7">
              <CardItemSlider mainData={mainData} />
            </div>

            <div className="cardItem__desc_details col-lg-5">
              <div className="cardItems__details" key={mainData.id}>
                <div className="cardItems__details_desc d-flex">
                  <div className="cardItems__details_rating d-flex align-items-center ms-5">
                    <box-icon name="star" color="rgba(0,0,0,0.48)"></box-icon>
                    <span className="cardItems__details_rating_rate me-1">
                      {mainData.rate}
                    </span>
                  </div>

                  <div className="cardItems__details_comment d-flex align-items-center">
                    <box-icon name="chat" color="rgba(0,0,0,0.48)"></box-icon>
                    <span className="cardItems__details_comment_num me-1">
                      85
                    </span>
                  </div>
                </div>

                <p className="cardItems__details_medal d-flex align-items-center my-3">
                  <box-icon name="medal" color="rgba(104,229,132,1)"></box-icon>
                  <span className="cardItems__details_medal_desc me-1">
                    بیش از ۵۰ خریدار این کالا را پیشنهاد داده‌اند
                  </span>
                </p>

                <h3 className="cardItems__details_title mt-1">
                  {mainData.mainTitle}
                </h3>

                <div className="cardItems__details_sale d-flex justify-content-between align-items-center">
                  <span className="cardItems__details_sale_seller">
                    فروشنده : {mainData.brand}
                  </span>

                  <div className="cardItems__details_sale_price">
                    <p className="cardItems__details_sale_price_discount">
                      {mainData.discountPrice}{" "}
                      <span className="cardItems__details_sale_price_toman">
                        تومان
                      </span>
                    </p>

                    <div className="cardItems__details_sale_price_main_discount d-flex flex-row-reverse justify-content-center align-items-center mt-2">
                      {mainData.discountPercent && (
                        <span className="cardItems__details_sale_price_discount_percent">
                          {mainData.discountPercent}%
                        </span>
                      )}
                      <span className="cardItems__details_sale_price_main d-block text-decoration-line-through ms-4">
                        {mainData.mainPrice}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cardItems__details_send_warranty my-3">
                  <div className="cardItems__details_send">
                    <p className="cardItems__details_send_sending d-flex align-items-center">
                      <box-icon
                        name="package"
                        animation="fade-right"
                        color="rgba(0,0,0,0.48)"
                      ></box-icon>
                      <span className="cardItems__details_send_ready me-1">
                        آماده ارسال
                      </span>
                    </p>
                  </div>

                  <div className="cardItems__details_warranty mt-2 d-flex align-items-center">
                    <span className="cardItems__details_warranty_icon">
                      <box-icon
                        name="check-shield"
                        animation="burst"
                        color="rgba(0,0,0,0.48)"
                      ></box-icon>
                    </span>
                    <span className="cardItems__details_warranty_health me-1">
                      گارانتی اصالت و سلامت فیزیکی کالا
                    </span>
                  </div>
                </div>

                <div className="cardItems__details_size">
                  <h5 className="cardItems__details_size_title">
                    سایز : {size}
                  </h5>

                  <div className="cardItems__details_size_buttons mt-5 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      S
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      M
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      L
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      XL
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      XXL
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      3XL
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      4XL
                    </button>
                    <button
                      className="btn btn-outline-dark mx-2 cardItems__details_size_bottons_btn"
                      onClick={(e) => setSize(e.target.innerHTML)}
                    >
                      5XL
                    </button>
                  </div>
                </div>

                <div className="cardItems__details_addToBasket mt-5 d-flex align-items-center">
                  <button className="cardItems__details_addToBasket_add btn btn-outline-dark">
                    افزودن به سبد خرید
                  </button>

                  <span className="cardItems__details_addToBasket_heart me-3">
                    <box-icon
                      name="donate-heart"
                      animation="burst"
                      color="rgba(0,0,0,0.48)"
                    ></box-icon>
                  </span>
                </div>

                <div className="cardItems__details_guarantee py-5 text-center">
                  <div className="row">
                    <div className="cardItems__details_guarantee_item col-lg-4">
                      <img
                        src="/images/SVG/delivery.svg"
                        alt="delivery"
                        className="cardItems__details_guarantee_item_img"
                      />
                      <span className="cardItems__details_guarantee_item_desc d-block">
                        تحویل سریع و آسان
                      </span>
                    </div>
                    <div className="cardItems__details_guarantee_item col-lg-4">
                      <img
                        src="/images/SVG/warranty.svg"
                        alt="warranty"
                        className="cardItems__details_guarantee_item_img"
                      />
                      <span className="cardItems__details_guarantee_item_desc d-block">
                        ۱۴ روز ضمانت بازگشت کالا
                      </span>
                    </div>
                    <div className="cardItems__details_guarantee_item col-lg-4">
                      <box-icon
                        name="shield-plus"
                        size="lg"
                        color="rgba(0,0,0,0.48)"
                      ></box-icon>
                      <span className="cardItems__details_guarantee_item_desc d-block">
                        ضمانت اصل بودن کالا
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vr cardItem__desc_vr mt-5"></div>

            <div className="cardItem__desc_properties col-lg-12 py-5">
              <div className="row">
                <div className="cardItem__desc_properties_right col-lg-4">
                  <h3 className="cardItem__desc_properties_right_title">
                    ویژگی ها
                  </h3>

                  <h5 className="cardItem__desc_properties_right_mainTitle mt-3">
                    {mainData.mainTitle}
                  </h5>
                </div>

                <div className="cardItem__desc_properties_left col-lg-8">
                  <h4 className="cardItem__desc_properties_left_subTitle">
                    مشخصات
                  </h4>

                  <div className="cardItem__desc_properties_left_items mt-3">
                    {mainData.properties.map((property) => (
                      <div className="cardItem__desc_properties_left_items_item mt-3 d-flex align-items-center justify-content-between">
                        <span className="cardItem__desc_properties_left_items_details">
                          {property.details} :{" "}
                        </span>

                        <span className="cardItem__desc_properties_left_items_amount">
                          {property.formation}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="vr cardItem__desc_properties"></div>

            {mainData.isSimilar ? (
              <div className="card__item_desc_similar col-lg-12">
                <SwiperGrab>
                  {similarInofs.map((similar) => (
                    <SwiperSlide className="amazing__slide">
                      <Card {...similar} />
                    </SwiperSlide>
                  ))}
                </SwiperGrab>
              </div>
            ) : (
              <h3 className="card__item_desc_no_similar my-5 text-center">
                جنس مشابه ایی یافت نشد ...
              </h3>
            )}

            <div className="cardItem__desc_comment col-lg-12">
              <div className="row">
                <div className="cardItem__desc_comment_opinion col-lg-3">
                  <h3 className="cardItem__desc_comment_opinion_title mb-3">
                    دیدگاه کاربران
                  </h3>

                  <p className="cardItem__desc_comment_opinion_main mb-5">
                    {mainData.mainTitle}
                  </p>

                  <div className="cardItem__desc_comment_opinion_rating">
                    <p className="cardItem__desc_comment_opinion_rating_rate">
                      <span className="ms-2 text-black">{mainData.rate}</span>
                      از
                      <span className="me-2">5</span>
                    </p>

                    <p className="cardItem__desc_comment_opinion_total mt-3">
                      از مجموع ۴۲۳ امتیاز کاربران
                    </p>

                    <div className="cardItem__desc_comment_opinion_progress">
                      <div className="cardItem__desc_comment_opinion_progress_item mt-4">
                        <div className="cardItem__desc_comment_opinion_progress_item_details d-flex justify-content-between align-items-center mb-2">
                          <span className="cardItem__desc_comment_opinion_progress_item_subTitle">
                            راحتی
                          </span>
                          <span className="cardItem__desc_comment_opinion_progress_item_rate">
                            4.2
                          </span>
                        </div>

                        <div className="progress">
                          <div className="progress-bar progress__cardItem w-75"></div>
                        </div>
                      </div>
                      <div className="cardItem__desc_comment_opinion_progress_item mt-4">
                        <div className="cardItem__desc_comment_opinion_progress_item_details d-flex justify-content-between align-items-center mb-2">
                          <span className="cardItem__desc_comment_opinion_progress_item_subTitle">
                            کیفیت موارد به کار رفته
                          </span>
                          <span className="cardItem__desc_comment_opinion_progress_item_rate">
                            4.1
                          </span>
                        </div>

                        <div className="progress">
                          <div className="progress-bar progress__cardItem w-75"></div>
                        </div>
                      </div>
                      <div className="cardItem__desc_comment_opinion_progress_item mt-4">
                        <div className="cardItem__desc_comment_opinion_progress_item_details d-flex justify-content-between align-items-center mb-2">
                          <span className="cardItem__desc_comment_opinion_progress_item_subTitle">
                            کیفیت دوخت و طراحی
                          </span>
                          <span className="cardItem__desc_comment_opinion_progress_item_rate">
                            4.1
                          </span>
                        </div>

                        <div className="progress">
                          <div className="progress-bar progress__cardItem w-75"></div>
                        </div>
                      </div>
                      <div className="cardItem__desc_comment_opinion_progress_item mt-4">
                        <div className="cardItem__desc_comment_opinion_progress_item_details d-flex justify-content-between align-items-center mb-2">
                          <span className="cardItem__desc_comment_opinion_progress_item_subTitle">
                            ارزش خرید نسبت به قیمت
                          </span>
                          <span className="cardItem__desc_comment_opinion_progress_item_rate">
                            4
                          </span>
                        </div>

                        <div className="progress">
                          <div className="progress-bar progress__cardItem w-75"></div>
                        </div>
                      </div>
                    </div>

                    <button className="cardItem__desc_comment_opinion_btn btn btn-outline-dark w-100 mt-5 mb-4">
                      شما هم نظر خود را بنویسید
                    </button>
                  </div>
                </div>

                <div className="cardItem__desc_comment_comments col-lg-9">
                  <p className="cardItem__desc_comment_comments_medal d-flex align-items-center">
                    <box-icon
                      name="medal"
                      color="rgba(104,229,132,1)"
                    ></box-icon>
                    <span className="cardItem__desc_comment_comments_medal_desc me-1">
                      بیش از ۵۰ خریدار این کالا را پیشنهاد داده‌اند
                    </span>
                  </p>

                  <div className="cardItem__desc_comment_comments_details d-flex align-items-center justify-content-between mt-4">
                    <div className="cardItem__desc_comment_comments_details_buyer">
                      <div className="cardItem__desc_comment_comments_details_buyer_details">
                        <span className="cardItem__desc_comment_comments_details_buyer_details_rate">
                          4
                        </span>

                        <span className="cardItem__desc_comment_comments_details_buyer_details_name">
                          حالا هر کی میتونه باشه
                        </span>

                        <p className="cardItem__desc_comment_comments_details_commentBody mt-5 me-5">
                          حالا هر چی میتونه باشه
                        </p>
                      </div>
                    </div>

                    <div className="cardItem__desc_comment_comments_details_seller">
                      <p className="cardItem__desc_comment_comments_details_seller_like d-flex align-items-center">
                        <box-icon
                          name="like"
                          animation="tada"
                          color="rgba(160,242,145,1)"
                        ></box-icon>
                        <span className="cardItem__desc_comment_comments_details_seller_like_text mx-2">
                          خرید این محصول را پیشنهاد می‌کنم
                        </span>
                        <box-icon
                          name="like"
                          animation="tada"
                          color="rgba(160,242,145,1)"
                        ></box-icon>
                      </p>

                      <p className="cardItem__desc_comment_comments_details_seller_name my-3">
                        فروشنده :{" "}
                        <span className="cardItem__desc_comment_comments_details_seller_name_title">
                          {mainData.brand}
                        </span>
                      </p>

                      <p className="cardItem__desc_comment_comments_details_seller_name_size">
                        سایز :{" "}
                        <span className="cardItem__desc_comment_comments_details_seller_name_size_size">
                          XL
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
