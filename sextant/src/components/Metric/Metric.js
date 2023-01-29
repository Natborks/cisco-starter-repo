import React from "react";
import PropTypes from "prop-types";
import styles from "./Metric.module.css";

function Metric({ data }) {
  return (
    <article className={styles.wrapper}>
      <h1>{data.title}</h1>
      <p>{data.value}</p>
    </article>
  );
}

Metric.propTypes = {
  data: PropTypes.object,
};

export default Metric;
