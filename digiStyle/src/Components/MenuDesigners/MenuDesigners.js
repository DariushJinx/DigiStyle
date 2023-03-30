import React from "react";
import "./MenuDesigners.css";
export default function MenuDesigners({ allMenus }) {
  return (
    <>
      <div className="mainDetails col-lg-9 mt-5">
        <div className="row">
          {allMenus.map((menu) => {
            return (
              <>
                <div className="mainDetails__fluid col-lg-12 ">
                  <div className="row">
                    <div className="mainDetails__fluid_large col-lg-8">
                      <div className="mainDetails__fluid_large_image">
                        <div className="mainDetails__fluid_large_image">
                          <img
                            src={menu.imgFluid}
                            alt={menu.alt}
                            className="mainDetails__fluid_large_image_img w-100"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mainDetails__fluid_small col-lg-4">
                      <div className="mainDetails__fluid_small_image position-relative">
                        <span className="mainDetails__fluid_small_overlay"></span>
                        <div className="mainDetails__fluid_small_image_details">
                          <img
                            src={menu.imgPart1}
                            alt={menu.alt}
                            className="mainDetails__fluid_small_image_img w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mainDetails__parts col-lg-12 my-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="mainDetails__fluid_small_image position-relative">
                        <span className="mainDetails__fluid_small_overlay"></span>
                        <div className="mainDetails__fluid_small_image_details">
                          <img
                            src={menu.imgPart2}
                            alt={menu.alt}
                            className="mainDetails__fluid_small_image_img w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mainDetails__fluid_small_image position-relative">
                        <span className="mainDetails__fluid_small_overlay"></span>
                        <div className="mainDetails__fluid_small_image_details">
                          <img
                            src={menu.imgPart3}
                            alt={menu.alt}
                            className="mainDetails__fluid_small_image_img w-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mainDetails__fluid_small_image position-relative">
                        <span className="mainDetails__fluid_small_overlay"></span>
                        <div className="mainDetails__fluid_small_image_details">
                          <img
                            src={menu.imgPart4}
                            alt={menu.alt}
                            className="mainDetails__fluid_small_image_img w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
