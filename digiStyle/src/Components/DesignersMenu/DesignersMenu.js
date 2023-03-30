import React, { useState } from "react";
import { Link } from "react-router-dom";

import { menuDataDesigners } from "../../Data/Data";
import CategoryDesignersMenu from "../CategoryDesignersMenu/CategoryDesignersMenu";
import MenuDesigners from "../MenuDesigners/MenuDesigners";

import "./DesignersMenu.css";
let allCategories = [
  "همه",
  ...new Set(menuDataDesigners.map((menu) => menu.category)),
];

export default function DesignersMenu() {
  let [allMenus, setAllMenus] = useState(menuDataDesigners);
  let [categories, setCategories] = useState(allCategories);

  let filterMenus = (category) => {
    if (category === "همه") {
      setAllMenus(menuDataDesigners);
      return;
    }

    let filteredMenus = menuDataDesigners.filter(
      (menu) => menu.category === category
    );

    setAllMenus(filteredMenus);
  };

  return (
    <div className="designersMenus d-sm-none d-xxl-block py-5">
      <div className="container">
        <div className="row">
          <div className="designersMenus_title d-flex justify-content-between align-items-center">
            <h2 className="designersMenus_title_title">
              طـــراحانــ ایــــرانـی
            </h2>

            <Link
              to="/home-designers-iranian"
              className="designersMenus_title_links_link text-decoration-none d-flex align-items-center"
            >
              <span className="ms-3">مشاهده خانه طراحان ایرانی</span>
              <box-icon name="left-arrow-circle"></box-icon>
            </Link>
          </div>

          <CategoryDesignersMenu
            categories={categories}
            filterMenus={filterMenus}
          />
          <MenuDesigners allMenus={allMenus} />
        </div>
      </div>
    </div>
  );
}
