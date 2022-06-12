import React from "react";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h3 className={styles.h3}>welcome the room</h3>
      {/* chatsection */}
      <div className={styles.chatbox}>dsfsdafsadfdsfs</div>
      <div className={styles.messagetypingbox}>
        {/* send button */}
        <form className={styles.chatfields}>
          <input type="text" className={styles.inputfield} />
          <button className={styles.submit}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
