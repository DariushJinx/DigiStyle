import React from "react";
import TopBar from "../../Components/TopBar/TopBar"
import NavBar from "../../Components/NavBar/NavBar"
import Header from "../../Components/Header/Header"
import AmazingSection from "../../Components/AmazingSection/AmazingSection";
import StyleSection from "../../Components/StyleSection/StyleSection";
import Menu from "../../Components/Menu/Menu";
import MostVisited from "../../Components/MostVisited/MostVisited";
import Newest from "../../Components/Newest/Newest";
import BestSeller from "../../Components/BestSeller/BestSeller";
import PopularBrands from "../../Components/PopularBrands/PopularBrands";
import Health from "../../Components/Health/Health";
import MostRecent from "../../Components/MostRecent/MostRecent";
import DesignersMenu from "../../Components/DesignersMenu/DesignersMenu";
import OffsSection from "../../Components/OffsSection/OffsSection";
import RecentVisit from "../../Components/RecentVisit/RecentVisit";
import DigiMeg from "../../Components/DigiMeg/DigiMeg";
import DetailsSection from "../../Components/DetailsSection/DetailsSection";
import FooterSection from "../../Components/FooterSection/FooterSection";

export default function Home() {
  return (
    <>
      <Header />
      <AmazingSection  />
      <StyleSection />
      <Menu />
      <MostVisited />
      <Newest />
      <BestSeller />
      <PopularBrands />
      <Health />
      <MostRecent />
      <DesignersMenu />
      <OffsSection />
      <RecentVisit />
      <DigiMeg />
      <DetailsSection />
      <FooterSection />
    </>
  );
}
