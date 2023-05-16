"use client";

import HeadlineBody from "./components/HeadlineBody";
import React from "react";

export default function World(props) {
  console.log("world");
  return <HeadlineBody articles={props.articles} filters={props.filters} />;
}
