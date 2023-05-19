"use client";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "./components/Navbar";
import styles from "./styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./components/Logo";
import Searchbar from "./components/searchbar";
import HeadlineBodyPlaceholder from "./components/HeadlineBodyPlaceholder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./all";
import World from "./world";
import Politics from "./politics";
import News from "./news";
import Biz from "./biz";
import Tech from "./tech";
import Entertainment from "./entertainment";
import Custom404 from "./404";
import Science from "./science";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState([]);
  const [route, setRoute] = useState("/api/all");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(route);
        const data = await response.json();

        setCategory(data.category);
        setQuery(data.query);

        if (data.category !== undefined && data.query !== undefined) {
          const url = `/api/getHeadlines?category=${encodeURIComponent(
            data.category
          )}&query=${encodeURIComponent(data.query)}`;
          console.log("trying to get articles from route");
          const headlinesResponse = await fetch(url);
          const headlinesData = await headlinesResponse.json();

          setArticles(headlinesData.headlines);
        }
        console.log("Fetch success");
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [route]);

  //when route changes
  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
    setQuery("");
  };

  // Function to receive the data from the child component
  const handleData2 = (data) => {
    setFilters(data);
    console.log("from app " + data);
  };

  const handleQueryChange = async (myQuery) => {
    setIsLoading(true);
    setQuery(myQuery);
    const url = `/api/getHeadlines?category=${encodeURIComponent(
      category
    )}&query=${encodeURIComponent(myQuery)}`;

    const headlinesResponse = await fetch(url);
    const headlinesData = await headlinesResponse.json();

    setArticles(headlinesData.headlines);
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("Query value in App:", query);
    if (query) {
      document.getElementById("search_input").value = "";
      document.getElementById("search_results").classList.remove("collapse");
      document.getElementById("search_results").innerHTML =
        "Your Search Results for: <strong>" + query + "</strong>";
    } else {
      document.getElementById("search_results").classList.add("collapse");
    }
  }, [query]);

  return (
    <Router>
      <Row>
        <Col id={styles.nav} xs={5} sm={5} md={3} lg={3} xl={3}>
          <NavBar sendToApp={handleData2} onRouteChange={handleRouteChange} />
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
            <h3 id="search_results" className="mx-auto collapse"></h3>
          </Row>
          <Row id={styles.headlineBody} className="pb-5">
            {isLoading ? (
              <HeadlineBodyPlaceholder />
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={<All articles={articles} filters={filters} />}
                />
                <Route
                  path="/world"
                  element={<World articles={articles} filters={filters} />}
                />
                <Route
                  path="/news"
                  element={<News articles={articles} filters={filters} />}
                />
                <Route
                  path="/politics"
                  element={<Politics articles={articles} filters={filters} />}
                />
                <Route
                  path="/science"
                  element={<Science articles={articles} filters={filters} />}
                />
                <Route
                  path="/biz"
                  element={<Biz articles={articles} filters={filters} />}
                />
                <Route
                  path="/tech"
                  element={<Tech articles={articles} filters={filters} />}
                />
                <Route
                  path="/entertainment"
                  element={
                    <Entertainment articles={articles} filters={filters} />
                  }
                />
                <Route path="/*" element={<Custom404 />} />
              </Routes>
            )}
          </Row>
        </Col>
      </Row>
    </Router>
  );
}
