import React, { useState } from "react";
import Button from "components/atoms/button";
import styles from "./login.module.css";
import { useQuery, useMutation } from "react-query";
import axios from "axios";

const postFunction = (data) =>
  axios
    .post(import.meta.env.VITE_BASE_URL, data, {
      headers: {
        "Content-Type": "application/json",
        crossDomain: true,
      },
    })
    .catch((error) => {
      console.log(error.response.data);
    });

function LoginPage() {
  const {
    mutate,
    data: mutData,
    error,
  } = useMutation(postFunction, {
    onError: (error) => {
      console.log("mutationerror", error);
    },
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const sendData = { username, password };
    mutate(JSON.stringify(sendData));
  };
  // console.log("/*/*/*/*/*", mutData);
  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.loginForm_group}>
            <label htmlFor="" className={styles.loginForm_label}>
              User name:
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className={styles.loginForm_group}>
            <label htmlFor="" className={styles.loginForm_label}>
              Password:
            </label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button onClick={handleLogin} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
