"use client";

import HeadlineBody from "./components/HeadlineBody";
import { fetchNewsHeadlines } from "./scripts/newsAPIClient";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "./components/Navbar";
import styles from "./styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./components/Logo";
import Searchbar from "./components/searchbar";
import HeadlineBodyPlaceholder from "./components/HeadlineBodyPlaceholder";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("", "");
      setArticles(headlines);
    }

    fetchData();
  }, []);
  return (
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
            <HeadlineBody articles={articles} filters={dataArray} />
          )}
        </Row>
      </Col>
    </Row>
  );
}
