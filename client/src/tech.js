"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function Tech(props) {
  console.log("tech");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
