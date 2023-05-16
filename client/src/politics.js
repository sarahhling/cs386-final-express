"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function Politics(props) {
  console.log("politics");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
