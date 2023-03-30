import React from "react";
import { menuData } from "../../Data/Data";
import "./DetailsSection.css";
export default function DetailsSection() {
  return (
    <div className="details mt-5">
      <div className="container">
        <div className="row">
          <div className="details__gift col-lg-12 my-5">
            <img
              src="images/JPEG/gift/1.jpg"
              alt="gift"
              className="details__gift_img w-100 mt-5"
            />
          </div>

          <div className="details__links col-lg-12 my-5">
            <div className="row">
              {menuData.map((data) => {
                return (
                  <>
                    {data.parts === "4" && (
                      <div className="details__links_title_link mt-sm-5">
                        <div>
                          <a
                            href="#"
                            className="details__links_title_link_title"
                          >
                            {data.category}
                          </a>
                        </div>

                        <div className="details__links_title_link_parts">
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issueFluid}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart1}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart2}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart3}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {data.parts === "3" && (
                      <div className="details__links_title_link mt-sm-5">
                        <div>
                          <a
                            href="#"
                            className="details__links_title_link_title"
                          >
                            {data.category}
                          </a>
                        </div>

                        <div className="details__links_title_link_parts">
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issueFluid}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart1}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart2}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {data.parts === "5" && (
                      <div className="details__links_title_link mt-sm-5">
                        <div>
                          <a
                            href="#"
                            className="details__links_title_link_title"
                          >
                            {data.category}
                          </a>
                        </div>

                        <div className="details__links_title_link_parts">
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issueFluid}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart1}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart2}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart3}
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="details__links_title_link_parts_first d-inline-block"
                            >
                              {data.issuePart4}
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </div>

          <div className="details__warranty col-lg-12 my-5 text-center">
            <div className="row justify-content-center align-items-center">
              <div className="details__warranty_item col-lg-4">
                <img
                  src="/images/SVG/delivery.svg"
                  alt="delivery"
                  className="details__warranty_item_img"
                />
                <span className="details__warranty_item_desc d-block">
                  تحویل سریع و آسان
                </span>
              </div>
              <div className="details__warranty_item col-lg-4">
                <img
                  src="/images/SVG/warranty.svg"
                  alt="warranty"
                  className="details__warranty_item_img"
                />
                <span className="details__warranty_item_desc d-block">
                  ۱۴ روز ضمانت بازگشت کالا
                </span>
              </div>
              <div className="details__warranty_item col-lg-4">
                <box-icon
                  name="shield-plus"
                  size="175px"
                  color="rgba(0,0,0,0.48)"
                ></box-icon>
                <span className="details__warranty_item_desc d-block mt-3">
                  ضمانت اصل بودن کالا
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
