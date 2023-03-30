import React from "react";
import "./FooterSection.css";
export default function FooterSection() {
  return (
    <div className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="footer__top col-lg-12 d-flex justify-content-center align-items-center">
            <img
              src="/images/SVG/digistyle.svg"
              alt="digistyle"
              className="footer__top_img bg-black p-3"
            />

            <div className="vr footer__top_vr"></div>
          </div>

          <div className="footer__details col-lg-12 my-5">
            <div className="row">
              <div className="footer__details_desc col-lg-3 col-sm-6 mt-sm-5">
                <h3 className="footer__details_desc_title">خرید</h3>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    زنانه
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    مردانه
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    بچگانه{" "}
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    زیبایی و سلامت
                  </a>
                </div>
              </div>

              <div className="footer__details_desc col-lg-3 col-sm-6 mt-sm-5">
                <h3 className="footer__details_desc_title">خدمات مشتریان</h3>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    پاسخ به پرسش‌های متداول
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    رویه‌های بازگرداندن کالا
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    شرایط استفاده
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    حریم خصوصی
                  </a>
                </div>
              </div>

              <div className="footer__details_desc col-lg-3 col-sm-6 mt-sm-5">
                <h3 className="footer__details_desc_title">
                  اطلاعات درباره ما
                </h3>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    درباره ما
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    تماس با ما
                  </a>
                </div>
                <div className="footer__details_desc_link">
                  <a href="#" className="footer__details_desc_link_link">
                    همکاری با ما
                  </a>
                </div>
              </div>

              <div className="footer__details_desc col-lg-3 col-sm-6 mt-sm-5">
                <h3 className="footer__details_desc_title_phone">
                  تلفن پشتیبانی: 000-000000
                </h3>

                <div className="footer__details_desc_socials d-flex justify-content-between align-items-center my-4">
                  <span className="footer__details_desc_socials_icon">
                    <box-icon
                      name="instagram-alt"
                      type="logo"
                      animation="tada"
                      color="rgba(0,0,0,0.66)"
                    ></box-icon>
                  </span>
                  <span className="footer__details_desc_socials_icon">
                    <box-icon
                      name="telegram"
                      type="logo"
                      animation="tada"
                      color="rgba(0,0,0,0.66)"
                    ></box-icon>
                  </span>
                  <span className="footer__details_desc_socials_icon">
                    <box-icon
                      name="twitter"
                      type="logo"
                      animation="tada"
                      color="rgba(0,0,0,0.66)"
                    ></box-icon>
                  </span>
                </div>

                <div className="footer__details_desc_newsletters">
                  <h3 className="footer__details_desc_newsletters_title">
                    ثبت‌نام در خبرنامه
                  </h3>

                  <form className="footer__details_desc_newsletters_form mt-4">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="text"
                          className="footer__details_desc_newsletters_form_input form-control shadow-none"
                          placeholder="ایمیل خود را وارد کنید"
                        />

                        <button className="footer__details_desc_newsletters_form_btn">
                          <box-icon
                            name="arrow-back"
                            animation="fade-right"
                            color="rgba(0,0,0,0.66)"
                          ></box-icon>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__download col-lg-12 d-xl-flex justify-content-center align-items-end">
            <h3 className="footer__download_title my-2">دانلود اپلیکیشن</h3>

            <div className="footer__download_markets mt-sm-5">
              <div className="row justify-content-end">
                <div className="footer__download_markets_images col-lg-2 col-sm-5">
                  <img
                    src="/images/PNG/google-play.png"
                    alt="google-play"
                    className="footer__download_markets_images_img w-100"
                  />
                </div>
                <div className="footer__download_markets_images col-lg-2 col-sm-5">
                  <img
                    src="/images/PNG/myket.png"
                    alt="mayket"
                    className="footer__download_markets_images_img w-100"
                  />
                </div>
                <div className="footer__download_markets_images col-lg-2 col-sm-5">
                  <img
                    src="/images/PNG/bazar.png"
                    alt="bazar"
                    className="footer__download_markets_images_img w-100"
                  />
                </div>
                <div className="footer__download_markets_images col-lg-2 col-sm-5">
                  <img
                    src="/images/PNG/apple.png"
                    alt="apple"
                    className="footer__download_markets_images_img w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
