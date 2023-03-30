import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import FooterSection from "../../Components/FooterSection/FooterSection";
import "./Brands.css";
import { brandsExp, internationalBrands, persianBrands } from "../../Data/Data";
export default function Brands() {
  let [infos, setInfos] = useState(brandsExp);
  let [brandsPersians, setBrandsPersians] = useState(persianBrands);
  let [brandsInternational, setBrandsInternational] =
    useState(internationalBrands);

  return (
    <>
      <TopBar />
      <NavBar />

      <div className="brands pt-5">
        <div className="container">
          <div className="row">
            <div className="brands__search d-flex justify-content-between align-items-center col-lg-12">
              <div className="brands__search_sales">
                <h2 className="brands__search_sales_title">برند های فروش</h2>
              </div>

              <div className="brands__search_search w-25 d-flex align-items-center">
                <box-icon
                  name="search-alt-2"
                  color="rgba(0,0,0,0.5)"
                ></box-icon>
                <input
                  type="text"
                  className="brands__search_search_input w-100 p-3"
                  placeholder="جستجوی برند (فارسی و انگلیسی)"
                />
              </div>
            </div>

            <div className="brands__exp mt-5 col-lg-12">
              <div className="row">
                {infos.map((info) => (
                  <div className="brands__exp_item col-lg-3 col-md-6 mt-sm-5">
                    <div className="brands__exp_item_details">
                      <img
                        src={info.img}
                        alt={info.alt}
                        className="brands__exp_item_details_img w-100 rounded-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="brands__persians col-lg-12 d-sm-none d-xl-block">
              <div className="row">
                <div className="brands__persians_title col-lg-2">
                  <h3 className="brands__persians_title_title">
                    برند های ایرانی
                  </h3>
                </div>

                <div className="brands__persians_items col-xl-10">
                  {brandsPersians.map((brand) => (
                    <a
                      href="#"
                      className="brands__persians_items_link text-decoration-none"
                    >
                      {brand.item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="brands__international col-xl-12 d-sm-none d-xl-block mt-5">
              <div className="row">
                <div className="brands__persians_title col-lg-2">
                  <h3 className="brands__persians_title_title">
                    برند های بین المللی
                  </h3>
                </div>

                <div className="brands__international_items col-lg-10">
                  {brandsInternational.map((brand) => (
                    <a
                      href="#"
                      className="brands__international_items_link text-decoration-none"
                    >
                      {brand.item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </>
  );
}
