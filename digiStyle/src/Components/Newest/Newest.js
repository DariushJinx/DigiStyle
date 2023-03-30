import React from "react";
import "./Newest.css";
export default function Newest() {
  return (
    <div className="newest">
      <div className="container">
        <div className="row">
          <div className="newest__items col-lg-6">
            <div className="newest__items_images rounded-4">
              <img
                src="/images/PNG/newest/1.png"
                alt="newest"
                className="newest__items_images_img w-100 rounded-4"
              />
            </div>
          </div>

          <div className="newest__items col-lg-6">
            <div className="newest__items_images rounded-4">
              <img
                src="/images/PNG/newest/2.jpg"
                alt="newest"
                className="newest__items_images_img w-100 rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
