"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function Business(props) {
  console.log("biz");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
