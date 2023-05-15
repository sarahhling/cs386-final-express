"use client";

import HeadlineBody from "./components/HeadlineBody";
import { fetchNewsHeadlines } from "./scripts/newsAPIClient";
import React, { useState, useEffect } from "react";

export default function Tech({ filters }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("technology", "");
      setArticles(headlines);
    }

    fetchData();
  }, []);
  console.log("science", "");
  return <HeadlineBody articles={articles} filters={filters} />;
}
