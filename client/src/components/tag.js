import React from "react";
import styles from "../styles/Tag.module.css";
import { processTag } from "../scripts/processTag";

function Tag({ type }) {
  const { style, value } = processTag(type);

  return <span className={`${styles.tag} ${style}`}>{value}</span>;
}

export default Tag;
