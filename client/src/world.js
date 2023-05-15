"use client";

import HeadlineBody from "../components/HeadlineBody";
import { fetchNewsHeadlines } from "../scripts/newsAPIClient";
import React, { useState, useEffect } from "react";

export default function World() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("world", "");
      setArticles(headlines);
    }

    fetchData();
  }, []);
  console.log("world", "");
  return <HeadlineBody articles={articles} />;
}
