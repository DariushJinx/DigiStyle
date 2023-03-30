import React, { useState } from "react";

import TopBar from "../../Components/TopBar/TopBar";
import NavBar from "../../Components/NavBar/NavBar";
import FooterSection from "../../Components/FooterSection/FooterSection";
import { amazingDetails } from "../../Data/Data";
import Card from "../../Components/Card/Card";

import "./Popular.css";
import { useParams } from "react-router-dom";

export default function Popular() {
  let [infos, setInfos] = useState(amazingDetails);

  let params = useParams();

  let aquaPopular = amazingDetails.find(
    (info) => info.aqua == params.popularName
  );

  console.log(aquaPopular);

  return (
    <div className="popular">
      <div className="container">
        <div className="row">
          <TopBar />
          <NavBar />
          <div className="popular__cards col-lg-12">
            <div className="row">
              {aquaPopular
                ? infos.slice(22, 25).map((info) => <Card {...info} />)
                : infos.slice(19, 22).map((info) => <Card {...info} />)}
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
