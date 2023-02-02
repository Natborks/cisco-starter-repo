import React from "react";
import PropTypes from "prop-types";
import styles from "./Metric.module.css";

function Metric({ url, ipv6 = false }) {
  const [ip, setIp] = React.useState("");

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data1) => {
        setIp(data1.ip);
      })
      .catch((error) => console.error(error));
  }, []);

  const title = ipv6 ? "User Ip (v6)" : "User Ip (v4)";
  return (
    <article className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{ip}</p>
    </article>
  );
}

Metric.propTypes = {
  data: PropTypes.object,
};

export default Metric;
