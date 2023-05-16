"use client";

import React from "react";
import { useState } from "react";
import { Nav, Image } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import CustomDropdown from "./dropdown";
import { useNavigate } from "react-router-dom";

const NavBar = ({ sendToApp, onRouteChange }) => {
  const [all, setAll] = useState("/images/all_b.png");
  const [world, setWorld] = useState("/images/world.png");
  const [news, setNews] = useState("/images/news.png");
  const [pol, setPol] = useState("/images/pol.png");
  const [biz, setBiz] = useState("/images/biz.png");
  const [sci, setSci] = useState("/images/sci.png");
  const [tech, setTech] = useState("/images/tech.png");
  const [ent, setEnt] = useState("/images/ent.png");

  const navigate = useNavigate();

  const handleData = (data) => {
    console.log("from nav " + data);
    sendToApp(data);
  };

  const handleLinkClick = (newRoute) => {
    onRouteChange(newRoute);
  };

  // Function to receive the data from the child component

  return (
    <>
      <Nav className={`flex-column pt-5 ${styles.nav}`}>
        <Nav.Item>
          <Nav.Link
            id="all"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setAll("/images/all_h.png");
            }}
            onMouseLeave={() => {
              setAll("/images/all_b.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
              handleLinkClick("/api/all"); // Perform your desired action
            }}
          >
            <Image
              src={all}
              className={`me-3 pb-1 ${styles.img}`}
              alt="all icon"
            />
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="news"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setNews("/images/news_h.png");
            }}
            onMouseLeave={() => {
              setNews("/images/news.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/news");
              handleLinkClick("/api/news"); // Perform your desired action
            }}
          >
            <Image
              src={news}
              className={`me-3 pb-1 ${styles.img}`}
              alt="news icon"
            />
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="world"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setWorld("/images/world_h.png");
            }}
            onMouseLeave={() => {
              setWorld("/images/world.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/world");
              handleLinkClick("/api/world"); // Perform your desired action
            }}
          >
            <Image
              src={world}
              className={`me-3 pb-1 ${styles.img}`}
              alt="world icon"
            />
            World
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="pol"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setPol("/images/pol_h.png");
            }}
            onMouseLeave={() => {
              setPol("/images/pol.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/politics");
              handleLinkClick("/api/politics"); // Perform your desired action
            }}
          >
            <Image
              src={pol}
              className={`me-3 pb-1 ${styles.img}`}
              alt="politics icon"
            />
            Politics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="sci"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setSci("/images/sci_h.png");
            }}
            onMouseLeave={() => {
              setSci("/images/sci.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/science");
              handleLinkClick("/api/science"); // Perform your desired action
            }}
          >
            <Image
              src={sci}
              className={`me-3 pb-1 ${styles.img}`}
              alt="science icon"
            />
            Science
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="tech"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setTech("/images/tech_h.png");
            }}
            onMouseLeave={() => {
              setTech("/images/tech.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/tech");
              handleLinkClick("/api/tech"); // Perform your desired action
            }}
          >
            <Image
              src={tech}
              className={`me-3 pb-1 ${styles.img}`}
              alt="technology icon"
            />
            Technology
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="ent"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setEnt("/images/ent_h.png");
            }}
            onMouseLeave={() => {
              setEnt("/images/ent.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/entertainment");
              handleLinkClick("/api/entertainment"); // Perform your desired action
            }}
          >
            <Image
              src={ent}
              className={`me-3 pb-1 ${styles.img}`}
              alt="entertainment icon"
            />
            Entertainment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            id="biz"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setBiz("/images/biz_h.png");
            }}
            onMouseLeave={() => {
              setBiz("/images/biz.png");
            }}
            onClick={(event) => {
              event.preventDefault();
              navigate("/biz");
              handleLinkClick("/api/biz"); // Perform your desired action
            }}
          >
            <Image
              src={biz}
              className={`me-3 pb-1 ${styles.img}`}
              alt="business icon"
            />
            Business
          </Nav.Link>
        </Nav.Item>
        <CustomDropdown sendToNav={handleData} />
      </Nav>
    </>
  );
};

export default NavBar;
