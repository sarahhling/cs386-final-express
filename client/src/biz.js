"use client";

import HeadlineBody from "../components/HeadlineBody";
import { fetchNewsHeadlines } from "../scripts/newsAPIClient";
import React, { useState, useEffect } from "react";

export default function Business() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("business", "");
      setArticles(headlines);
    }

    fetchData();
  }, []);
  console.log("biz", "");
  return <HeadlineBody articles={articles} />;
}
