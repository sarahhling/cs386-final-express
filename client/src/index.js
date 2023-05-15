import React from "react";
import ReactDOM from "react-dom/client";
import { Container, Row } from "react-bootstrap";
import styles from "./styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Footer from "./components/Footer";
import "./styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Container fluid id={styles.container}>
      <App />
      <Row>
        <Footer />
      </Row>
    </Container>
  </React.StrictMode>
);
