import React, { Children } from "react";
import Metric from "../Metric/Metric";
import styles from "./Exhibit.module.css";

function Exhibit({ children }) {
  return (
    <>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>Metrics</h1>
        <section id="exhibits" className={styles.exhibits}>
          {children}
        </section>
      </section>
    </>
  );
}

export default Exhibit;
