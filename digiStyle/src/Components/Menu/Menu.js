import React, { useState } from "react";

import { menuData } from "../../Data/Data";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import MenuDetails from "../MenuDetails/MenuDetails";

import "./Menu.css";

let allCategories = ["همه", ...new Set(menuData.map((menu) => menu.category))];

export default function Menu() {
  let [allMenus, setAllMenus] = useState(menuData);
  let [categories, setCategories] = useState(allCategories);

  let filterMenus = (category) => {
    if (category === "همه") {
      setAllMenus(menuData);
      return;
    }

    let filteredMenus = menuData.filter((menu) => menu.category === category);

    setAllMenus(filteredMenus);
  };

  return (
    <div className="menu d-sm-none d-lg-block mt-5">
      <div className="container">
        <div className="row">
          <CategoryMenu categories={categories} filterMenus={filterMenus} />
          <MenuDetails allMenus={allMenus}></MenuDetails>
        </div>
      </div>
    </div>
  );
}
