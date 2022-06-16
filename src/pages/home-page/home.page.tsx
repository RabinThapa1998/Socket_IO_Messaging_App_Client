import React, { useEffect, useState, useCallback } from "react";
import { io, connect } from "socket.io-client";
import styles from "./home.module.css";
import ScrollToBottom from "react-scroll-to-bottom";

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
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const socket = io("http://localhost:8080");

  // const updateDebounceText = debounce((text) => {
  //   setMessage(text);
  // });
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   updateDebounceText(e.target.value);
  //   // setMessage(e.target.value);1000
  // };

  socket.on("connect", () => {
    console.log("you are connected", socket.id);
  });
  useEffect(() => {
    socket.on("receive_message", (message) => {
      console.log("received message", message);
      setMessageList((list) => [...list, message]);
    });
  }, [socket]);

  const joinRoom = (e) => {
    e.preventDefault();
    if (username !== " " && room !== "") {
      socket.emit("join_room", room);
    }
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };

  return (
    <div className={styles.homepage}>
      <h3 className={styles.h3}>welcome the room</h3>
      <div className={styles.chatbox}>
        <ScrollToBottom className={styles.scrolltobottomcontainer}>
          {messageList.map((messageContent, index) => (
            <div
              className={
                username === messageContent.author ? styles.you : styles.other
              }
              key={index}
            >
              <div className={styles.messagepill}>
                <p key={index}>{messageContent.message}</p>
              </div>
              <div key={index} className={styles.messageStatus}>
                <p className={styles.messageauthor}>{messageContent.author}</p>
                <p>{messageContent.time}</p>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div>
        <form onSubmit={joinRoom}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button type="submit">Join a room</button>
        </form>
      </div>

      <div className={styles.messagetypingbox}>
        {/* send button */}
        <form className={styles.chatfields} onSubmit={sendMessage}>
          <input
            type="text"
            className={styles.inputfield}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button className={styles.submit} type="submit" onClick={sendMessage}>
            &#9658;
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
