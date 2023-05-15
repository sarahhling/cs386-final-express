import React from "react";
import Image from "react-bootstrap/Image";
import styles from "../styles/Logo.module.css";

function Logo() {
  return <Image src="/images/logo.png" alt="logo" className={styles.logo} />;
}

export default Logo;
