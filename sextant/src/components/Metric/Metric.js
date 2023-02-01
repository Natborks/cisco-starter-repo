import React from "react";
import PropTypes from "prop-types";
import styles from "./Metric.module.css";

function Metric({ data, ipv6 = false }) {
  const title = ipv6 ? "User Ip (v6)" : "User Ip (v4)";
  return (
    <article className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{data}</p>
    </article>
  );
}

Metric.propTypes = {
  data: PropTypes.object,
};

export default Metric;
