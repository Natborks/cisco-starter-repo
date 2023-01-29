import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <nav className={styles.wrapper}>
      <div id="logo">
        <h1>SEXTANT</h1>
      </div>
    </nav>
  );
}

export default Banner;
