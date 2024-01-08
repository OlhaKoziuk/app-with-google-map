import React from "react";
import styles from "./Button.module.css";

export const Button = ({ openModal }) => {
  return (
    <div>
      <button type="button"
        className={styles.button}
        onClick={openModal}
      >
        Create advertisement
      </button>
    </div>
  );
};
