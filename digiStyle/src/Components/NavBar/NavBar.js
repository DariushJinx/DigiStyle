import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { navItems } from "../../Data/Data";
import NavBarItem from "../NavBarItem/NavBarItem";

import "./NavBar.css";
export default function NavBar() {
  let [infos, setInfos] = useState(navItems);

  let showHover = (menuID) => {
    let newInfos = [...infos];

    newInfos.forEach((info) => {
      if (info.id === menuID) {
        if (!info.hide) {
          info.show = true;
        }
        // console.log(info.show);
      }
    });
    // console.log(newInfos);
    setInfos(newInfos);
    // setShowMenus(true)
  };

  let hideHover = (id) => {
    let newInfos = [...infos];
    newInfos.forEach((info) => {
      if (info.id === id) {
        info.show = false;
        // console.log(info.show);
      }
    });
    // console.log(newInfos);
    setInfos(newInfos);
  };

  return (
    <div className="Nav mt-lg-5">
      <div className="vr vr__navbar my-4 mx-auto"></div>

      <Navbar expand="xl">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-sm-auto mx-lg-auto d-md-flex align-items-md-center align-items-lg-center px-5 my-md-3 w-sm-50">
              {infos.map((info) => (
                <NavBarItem
                  {...info}
                  onEnter={() => showHover(info.id)}
                  onExit={() => hideHover(info.id)}
                />
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
