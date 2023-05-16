"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function Entertainment(props) {
  console.log("entertainment");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
