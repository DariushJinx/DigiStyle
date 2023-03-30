import React, { useState } from "react";
import "./CategoryMenu.css";
export default function CategoryMenu({ categories, filterMenus }) {
  let [mainCategory, setMainCategory] = useState("همه");
  return (
    <div className="category text-center py-4">
      {categories.map((category) => (
        <button
          
          type="button"
          className={
            category === mainCategory ? "category__btn active__click" : "category__btn"
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
