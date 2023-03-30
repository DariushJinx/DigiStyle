import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import FooterSection from "../../Components/FooterSection/FooterSection";
import "./Recent_Visit.css";
import { amazingDetails } from "../../Data/Data";
import Card from "../../Components/Card/Card";
export default function Recent_Visit() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="recentVisitedCards">
      <div className="row recentVisited__row">
        <TopBar />
        <NavBar />
        {/* <div className="recentVisited__image"></div> */}
        <div className="recentVisited__cards my-5">
          <div className="recentVisited__container">
            <div className="row recentVisited__row justify-content-between">
              {infos.slice(19, 25).map((info) => (
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
