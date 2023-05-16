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
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching from app.js");
      await fetch("/api/all")
        .then((res) => res.json())
        .then((data) => {
          setCategory(data.category);
          setQuery(data.query);
          const headlines = fetchNewsHeadlines(data.category, data.query);
          setArticles(headlines);
          setIsLoading(false);
          console.log("fetch success");
        });
    };

    fetchData();
  }, []);

  // Function to receive the data from the child component
  const handleData2 = (data) => {
    setDataArray(data);
    console.log("from app " + data);
  };

  const handleQueryChange = async (myQuery) => {
    setIsLoading(true);
    setQuery(myQuery);
    const headlines = await fetchNewsHeadlines(category, query);
    setArticles(headlines);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Query value in App:", query);
  }, [query]);

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
          <Searchbar
            category={category}
            onQueryChange={handleQueryChange}
          ></Searchbar>
        </Row>
        <Row id={styles.headlineBody} className="pb-5">
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
