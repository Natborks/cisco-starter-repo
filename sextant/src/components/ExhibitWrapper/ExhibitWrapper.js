import React from "react";
import PropTypes from "prop-types";
import styles from "./ExhibitWrapper.module.css";

function ExhibitWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

ExhibitWrapper.propTypes = {
  children: PropTypes.node,
};

export default ExhibitWrapper;
