import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className={styles.progressContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
