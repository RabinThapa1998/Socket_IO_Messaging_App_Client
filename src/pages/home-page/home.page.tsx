import React, { useEffect, useState, useCallback } from "react";
import { io, connect } from "socket.io-client";
import styles from "./home.module.css";
const debounce = (cb, delay = 100) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const HomePage = () => {
  const [message, setMessage] = React.useState("");
  const [received, setReceived] = React.useState("");
  const [sent, setSent] = React.useState("");
  const socket = io("http://localhost:8080");

  const updateDebounceText = debounce((text) => {
    setMessage(text);
  });
  const handleChange = (e) => {
    e.preventDefault();
    updateDebounceText(e.target.value);
    // setMessage(e.target.value);1000
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("you are connected", socket.id);
    });
    socket.on("receive-message", (message) => {
      console.log("message", message);
      setReceived(message);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("send-message", message);
    setSent(message);
    socket.on("receive-message", (message) => {
      console.log("message", message);
      setReceived(message);
    });
  };

  return (
    <div className={styles.homepage}>
      <h3 className={styles.h3}>welcome the room</h3>
      <div className={styles.chatbox}>
        {/* {display?.map((item, index) => (
          <p key={index}>{item}</p>
        ))} */}

        <p className={styles.messagesent}>{sent}</p>
        <p className={styles.messagereceived}>{received}</p>
      </div>

      <div className={styles.messagetypingbox}>
        {/* send button */}
        <form className={styles.chatfields} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.inputfield}
            onChange={handleChange}
          />
          <button
            className={styles.submit}
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
