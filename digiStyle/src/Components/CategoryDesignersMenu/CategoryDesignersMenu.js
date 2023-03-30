import React, { useState } from "react";
import "./CategoryDesignersMenu.css";
export default function CategoryDesignersMenu({ categories, filterMenus }) {
  let [mainCategory, setMainCategory] = useState("همه");

  return (
    <div className="categoryDesigners col-lg-3 d-flex align-items-start justify-content-start flex-column mt-5">
      {categories.map((category) => (
        <button
          type="button"
          className={
            category === mainCategory
              ? "categoryDesigners__btn active__click"
              : "categoryDesigners__btn"
          }
          onClick={() => {
            filterMenus(category);
            setMainCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
