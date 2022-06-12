import React from "react";
import styles from "./menu.button.module.css";

const MenuButtons = () => {
  return (
    <div className={styles.menuBtn}>
      <div className={styles.profile}>
        <div className={styles.status}></div>
      </div>
      <div className={styles.username}>
        <p className={styles.p}>Rabin Thapa</p>
      </div>
    </div>
  );
};

export default MenuButtons;
