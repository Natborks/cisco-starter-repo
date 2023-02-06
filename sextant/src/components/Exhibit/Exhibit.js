import React, { Children } from "react";
import Metric from "../Metric/Metric";
import styles from "./Exhibit.module.css";
import PropTypes from "prop-types";

function Exhibit({ children, title }) {
  return (
    <>
      {/* <section className={styles.wrapper}>
        <h1 className={styles.title}>Metrics</h1>
        <section id="exhibits" className={styles.exhibits}>
          {children}
        </section>
      </section> */}
      <article className={styles.wrapper}>
        <h1>{title}</h1>
        <p>{children}</p>
      </article>
    </>
  );
}

Exhibit.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Exhibit;
