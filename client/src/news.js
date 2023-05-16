"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function News(props) {
  console.log("news");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
