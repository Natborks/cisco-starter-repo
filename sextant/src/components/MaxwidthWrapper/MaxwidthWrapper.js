import React from "react";
import styles from "./Maxwidthwrapper.module.css";

function MaxwidthWrapper({ children, maxWidth = 1200 }) {
  return (
    <div className={styles.wrapper} style={{ "--max-width": maxWidth + "px" }}>
      {children}
    </div>
  );
}

export default MaxwidthWrapper;
