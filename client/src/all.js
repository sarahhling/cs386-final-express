"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function All(props) {
  console.log("all");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
