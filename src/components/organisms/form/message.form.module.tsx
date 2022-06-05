import React, { useId } from "react";
import styles from "./message.form.module.css";
import button from "../../atoms/button/button.module.css";
import { io } from "socket.io-client";

const MessageForm = () => {
  const socket = io("http://localhost:8080");
  const id1 = useId();
  const id2 = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  socket.on("connect", () => {
    alert("You are connected with Id: " + socket.id);
    socket.emit("custom-event", 10, "a", { b: "ball" });
  });
  return (
    <>
      <h1 className={styles.headerTopTitle}>chat room</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor={id1} className={` ${styles.headerTopTitle}`}>
              Message
            </label>
            <input type="text" id={id1} />
            <label htmlFor={id2} className={styles.headerTopTitle}>
              Room
            </label>
            <input type="text" id={id2} />
          </div>
          <button type="submit" className={`mx-auto ${button.button}`}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default MessageForm;
