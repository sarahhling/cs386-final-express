"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function Science(props) {
  console.log("science");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
