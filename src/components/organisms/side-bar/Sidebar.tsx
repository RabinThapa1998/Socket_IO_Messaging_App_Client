import React from "react";
import MenuButtons from "components/atoms/menu-buttons";
import styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContanier}></div>
      <MenuButtons />
      <MenuButtons />
      <MenuButtons />
      <MenuButtons />
    </div>
  );
};

export default Sidebar;
