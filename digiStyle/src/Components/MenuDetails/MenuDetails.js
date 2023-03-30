import React from "react";
import "./MenuDetails.css";
export default function MenuDetails({ allMenus }) {
  return (
    <>
      <div className="mainDetails">
        <div className="row">
          {allMenus.map((menu) => {
            return (
              <>
                <div className="mainDetails__fluid position-relative col-lg-12 ">
                  <img
                    src={menu.imgFluid}
                    alt="menu-items"
                    className="mainDetails__fluid_item_img w-100"
                  />
                  <span className="mainDetails__fluid_issue">
                    {menu.issueFluid}
                  </span>
                </div>

                <div className="mainDetails__parts col-lg-12 my-5">
                  <div className="row">
                    {menu.parts === "4" && (
                      <>
                        <div className="mainDetails__parts_part col-lg-4">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart1}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart1}
                            </span>
                          </div>
                        </div>
                        <div className="mainDetails__parts_part col-lg-4">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart2}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart2}
                            </span>
                          </div>
                        </div>
                        <div className="mainDetails__parts_part col-lg-4">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart3}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart3}
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {menu.parts === "3" && (
                      <>
                        <div className="mainDetails__parts_part col-lg-6">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart1}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart1}
                            </span>
                          </div>
                        </div>
                        <div className="mainDetails__parts_part col-lg-6">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart2}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart2}
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {menu.parts === "5" && (
                      <>
                        <div className="mainDetails__parts_part col-lg-3">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart1}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart1}
                            </span>
                          </div>
                        </div>
                        <div className="mainDetails__parts_part col-lg-3">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart2}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart2}
                            </span>
                          </div>
                        </div>
                        <div className="mainDetails__parts_part col-lg-3">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart3}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart3}
                            </span>
                          </div>
                        </div>
                        <div className="mainDetails__parts_part col-lg-3">
                          <div className="mainDetails__parts_part_images">
                            <img
                              src={menu.imgPart4}
                              alt="menuImg"
                              className="mainDetails__parts_part_images_img w-100"
                            />
                            <span className="mainDetails__parts_part_issue">
                              {menu.issuePart4}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
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
