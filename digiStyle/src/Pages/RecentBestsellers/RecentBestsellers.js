import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import FooterSection from "../../Components/FooterSection/FooterSection";
import "./RecentBestsellers.css";
import { amazingDetails } from "../../Data/Data";
import Card from "../../Components/Card/Card";
export default function RecentBestsellers() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="bestSellerCards">
      <div className="row bestSeller__row">
        <TopBar />
        <NavBar />
        {/* <div className="bestSeller__image"></div> */}
        <div className="bestSeller__cards my-5">
          <div className="bestSeller__container">
            <div className="row bestSeller__row justify-content-between">
              {infos.slice(15, 19).map((info) => (
                <Card {...info} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
