import React from "react";
import "./OffsSection.css";
export default function OffsSection() {
  return (
    <div className="offs overflow-hidden">
      <div className="offs__container">
        <div className="row offs__row">
          <div className="offs__right col-xl-4 col-lg-12 ">
            <div className="offs__right_top_image">
              <img
                src="images/JPEG/offs/1.jpg"
                alt="offs"
                className="offs__right_top_image_img w-100"
              />
            </div>
            <div className="offs__right_bottom_image">
              <img
                src="images/JPEG/offs/3.jpg"
                alt="offs"
                className="offs__right_bottom_image_img w-100"
              />
            </div>
          </div>

          <div className="offs__left col-xl-8 col-lg-12">
            <div className="row offs__row">
              <div className="offs__left_top col-lg-12">
                <div className="offs__left_top_image">
                  <img
                    src="images/JPEG/offs/2.jpg"
                    alt="offs"
                    className="offs__left_top_image_img w-100"
                  />
                </div>
              </div>
              <div className="offs__left_bottom col-lg-12">
                <div className="row offs__row">
                  <div className="offs__left_bottom_right col-lg-4">
                    <div className="offs__left_bottom_right_image">
                      <img
                        src="images/JPEG/offs/4.jpg"
                        alt="offs"
                        className="offs__left_bottom_right_image_img w-100"
                      />
                    </div>
                  </div>
                  <div className="offs__left_bottom_left col-lg-8">
                    <div className="offs__left_bottom_left_image">
                      <img
                        src="images/JPEG/offs/5.jpg"
                        alt="offs"
                        className="offs__left_bottom_left_image_img w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
