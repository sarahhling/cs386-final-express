"use client";

import HeadlineBody from "./components/HeadlineBody";
import { fetchNewsHeadlines } from "./scripts/newsAPIClient";
import React, { useState, useEffect } from "react";

export default function News({ filters }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("news", "");
      setArticles(headlines);
    }

    fetchData();
  }, []);
  console.log("news", "");
  return <HeadlineBody articles={articles} filters={filters} />;
}
