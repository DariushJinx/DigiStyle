import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import FooterSection from "../../Components/FooterSection/FooterSection";
import "./Most_Recent.css";
import { amazingDetails } from "../../Data/Data";
import Card from "../../Components/Card/Card";
export default function Most_Recent() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="mostCards">
      <div className="row most__row">
        <TopBar />
        <NavBar />
        {/* <div className="most__image"></div> */}
        <div className="most__cards my-5">
          <div className="most__container">
            <div className="row most__row justify-content-between">
              {infos.slice(25, 29).map((info) => (
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
