import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/Navbar";
import styles from "./styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./components/Logo";
import Searchbar from "./components/searchbar";
import HeadlineBodyPlaceholder from "./components/HeadlineBodyPlaceholder";
import Footer from "./components/Footer";
import "./styles/globals.css";
import Entertainment from "./entertainment";
import News from "./news";
import All from "./all";
import Science from "./science";
import Politics from "./politics";
import World from "./world";
import Business from "./biz";
import Tech from "./tech";

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [query, setQuery] = useState("");

  // Function to receive the data from the child component
  const handleData2 = (data) => {
    setDataArray(data);
    console.log("from app " + data);
  };

  const handleQueryChange = (myQuery) => {
    // Perform actions with the query value in the parent component
    setQuery(myQuery);
  };

  useEffect(() => {
    console.log("Query value in App:", query);
  }, [query]);

  useEffect(() => {
    const fetchCurrentTime = async () => {
      await fetch("/api/current-time")
        .then((res) => res.json())
        .then((data) => setCurrentTime(data.currentTime));
    };
    fetchCurrentTime();
    const interval = setInterval(fetchCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, []);

  return (
    <Container fluid id={styles.container}>
      <Row>
        <Col id={styles.nav} xs={5} sm={5} md={3} lg={3} xl={3}>
          <NavBar sendToApp={handleData2}></NavBar>
        </Col>
        <Col xs={7} sm={7} md={9} lg={9} xl={9}>
          <Row className="justify-content-center">
            <Logo />
          </Row>
          <Row className="justify-content-center">
            <Searchbar onQueryChange={handleQueryChange}></Searchbar>
          </Row>

          <Row id={styles.headlineBody}>
            {isLoading ? (
              <HeadlineBodyPlaceholder />
            ) : (
              <>
                {window.location.pathname === "/" && (
                  <All filters={dataArray} query={query} />
                )}
                {window.location.pathname === "/entertainment" && (
                  <Entertainment />
                )}
                {window.location.pathname === "/news" && (
                  <News filters={dataArray} query={query} />
                )}
                {window.location.pathname === "/science" && (
                  <Science filters={dataArray} query={query} />
                )}
                {window.location.pathname === "/biz" && (
                  <Business filters={dataArray} query={query} />
                )}
                {window.location.pathname === "/world" && (
                  <World filters={dataArray} query={query} />
                )}
                {window.location.pathname === "/politics" && (
                  <Politics filters={dataArray} query={query} />
                )}
                {window.location.pathname === "/tech" && (
                  <Tech filters={dataArray} query={query} />
                )}
              </>
            )}
          </Row>
          <Row>
            <Footer
              time={!currentTime ? "Loading..." : new Date(currentTime)}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

// const [data, setData] = React.useState(null);

// React.useEffect(() => {
//   fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data.message));
// }, []);

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>{!data ? "Loading..." : data}</p>
//     </header>
//   </div>
// );
