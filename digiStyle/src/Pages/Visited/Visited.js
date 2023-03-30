import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import FooterSection from "../../Components/FooterSection/FooterSection";
import "./Visited.css";
import { amazingDetails } from "../../Data/Data";
import Card from "../../Components/Card/Card";
export default function Visited() {
  let [infos, setInfos] = useState(amazingDetails);

  return (
    <div className="visitedCards">
      <div className="row visited__row">
        <TopBar />
        <NavBar />
        {/* <div className="visited__image"></div> */}
        <div className="visited__cards my-5">
          <div className="visited__container">
            <div className="row visited__row justify-content-between">
              {infos.slice(11, 15).map((info) => (
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
