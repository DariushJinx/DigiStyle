import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import "./NavBarItem.css";
export default function NavBarItem(props) {
  const enterHandler = (id) => {
    props.onEnter(id);
  };

  const leaveHandler = (id) => {
    props.onExit(id);
  };

  return (
    <>
      <div
        className="navBarItem "
        onMouseEnter={() => enterHandler(props.id)}
        onMouseLeave={() => leaveHandler(props.id)}
      >
        <Nav.Link>{props.link}</Nav.Link>

        <div
          className={`hoverMenu ${
            props.show ? "show" : ""
          } bg-white shadow position-absolute pt-4`}
        >
          <div className="container">
            <div className="hoverMenu__width">
              <div className="row">
                <div className="hoverMenu__details col-lg-6">
                  <h3 className="hoverMenu__details_title">
                    <a
                      href="#"
                      className="hoverMenu__details_title_link d-flex align-items-center text-decoration-none"
                    >
                      <span className="ms-4">{props.titleClothes}</span>
                      <box-icon
                        name="chevron-left"
                        animation="fade-right"
                      ></box-icon>
                    </a>
                  </h3>
                  <div className="hoverMenu__details_desc">
                    <div className="row">
                      <div className="col-lg-6 hoverMenu__details_desc_right">
                        <ul className="list-unstyled hoverMenu__details_desc_right_menu">
                          <li className="hoverMenu__details_desc_right_menu_item my-4">
                            <a
                              href="#"
                              className="hoverMenu__details_desc_right_menu_link"
                            >
                              {props.detailsRightSecondItemClothes}
                            </a>
                          </li>
                          <li className="hoverMenu__details_desc_right_menu_item my-4">
                            <a
                              href="#"
                              className="hoverMenu__details_desc_right_menu_link"
                            >
                              {props.detailsRightFirstItemClothes}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 hoverMenu__details_desc_left">
                        <ul className="list-unstyled hoverMenu__details_desc_right_menu">
                          <li className="hoverMenu__details_desc_right_menu_item my-4">
                            <a
                              href="#"
                              className="hoverMenu__details_desc_right_menu_link"
                            >
                              {props.detailsRightThirdItemClothes}
                            </a>
                          </li>
                          <li className="hoverMenu__details_desc_right_menu_item my-4">
                            <a
                              href="#"
                              className="hoverMenu__details_desc_right_menu_link"
                            >
                              {props.detailsRightFourthItemClothes}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hoverMenu__images col-lg-6">
                  <h3 className="hoverMenu__images_title">
                    {props.titleLeftClothes}
                  </h3>

                  <div className="hoverMenu__images_images">
                    <div className="row">
                      <div className="hoverMenu__images_images_right col-lg-6">
                        <img
                          src={props.detailsLeftFirstImgClothes}
                          alt={props.detailsLeftAlt}
                          className="hoverMenu__images_images_img w-100 mt-3"
                        />

                        <img
                          src={props.detailsLeftSecondImgClothes}
                          alt={props.detailsLeftAlt}
                          className="hoverMenu__images_images_img w-100 mt-3"
                        />
                      </div>

                      <div className="hoverMenu__images_images_left col-lg-6">
                        <img
                          src={props.detailsLeftThirdImgClothes}
                          alt={props.detailsLeftAlt}
                          className="hoverMenu__images_images_img w-100 mt-3"
                        />

                        <img
                          src={props.detailsLeftFourthImgClothes}
                          alt={props.detailsLeftAlt}
                          className="hoverMenu__images_images_img w-100 mt-3"
                        />
                      </div>

                      <Link
                        to="/brands"
                        className="hoverMenu__images_images_link text-decoration-none d-flex align-items-center justify-content-end mt-2"
                      >
                        <span className="ms-4">مشاهده همه برندها</span>
                        <box-icon
                          name="chevron-left"
                          animation="fade-right"
                        ></box-icon>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
