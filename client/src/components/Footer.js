import React, { useState, useEffect } from "react";
import styles from "../styles/footer.module.css";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchCurrentTime = async () => {
      await fetch("/api/current-time")
        .then((res) => res.json())
        .then((data) => setCurrentTime(data.currentTime));
    };
    fetchCurrentTime();
    const interval = setInterval(fetchCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`pt-3 ${styles.footer}`}>
      <p>Current Date and Time: {currentTime.toLocaleString()}</p>
      <p>© 2023 Sarah Ling. All rights reserved</p>
      <p>
        This website utilizes&nbsp;
        <a href="https://newscatcherapi.com/" className={styles.link}>
          <strong className={styles.newscatcher}>&#60;/newscatcher&#62;</strong>
        </a>
        &nbsp;API for news sourcing
      </p>
    </div>
  );
}
