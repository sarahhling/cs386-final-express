"use client";

import HeadlineBody from "./components/HeadlineBody";
import { fetchNewsHeadlines } from "./scripts/newsAPIClient";
import React, { useState, useEffect } from "react";

export default function All({ filters }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("", "");
      setArticles(headlines);
    }

    fetchData();
  }, []);
  return <HeadlineBody articles={articles} filters={filters} />;
}
