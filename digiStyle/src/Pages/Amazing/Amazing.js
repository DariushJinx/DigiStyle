import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import "./Amazing.css";
import { amazingDetails } from "../../Data/Data";
import Card from "../../Components/Card/Card";
import FooterSection from "../../Components/FooterSection/FooterSection";
export default function Amazing() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="amazingCards">
      <div className="row amazing__row">
        <TopBar />
        <NavBar />
        <div className="amazing__image"></div>
        <div className="amazing__cards my-5">
          <div className="amazing__container">
            <div className="row amazing__row justify-content-between">
              {infos.slice(0, 8).map((info) => (
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
