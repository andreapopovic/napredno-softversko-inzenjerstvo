import React from "react";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Page Not Found</h1>
        <p className={styles.paragraph}>
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
