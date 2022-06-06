import React, { useId, useEffect } from "react";
import styles from "./message.form.module.css";
import { io, connect } from "socket.io-client";

const MessageForm = () => {
  const id1 = useId();
  const id2 = useId();
  const [message, setMessage] = React.useState("");
  const [display, setDisplay] = React.useState("");

  const socket = io("http://localhost:8080");

  socket.on("connect", () => {
    console.log("you are connected", socket.id);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("send-message", message);
    socket.on("receive-message", (message) => {
      setDisplay(message);
    });
  };

  return (
    <>
      <h1 className={styles.headerTopTitle}>chat room</h1>
      <div className={styles.chatContainer}>
        <div className={styles.chatBox}>
          <p>{display}</p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <div className={styles.formGroup}>
                <label htmlFor={id1} className={styles.headerTopTitle}>
                  Message
                </label>
                <input
                  type="text"
                  id={id1}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor={id2} className={styles.headerTopTitle}>
                  Room
                </label>
                <input type="text" id={id2} />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button type="submit" className={styles.button}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
