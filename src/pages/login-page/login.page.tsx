import React, { useEffect, useState } from "react";
import Button from "components/atoms/button";
import styles from "./login.module.css";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";

const postFunction = (data) =>
  axios.post(config.VITE_BASE_URL, data, {
    headers: {
      "Content-Type": "application/json",
      crossDomain: true,
    },
  });

function LoginPage() {
  const [btnState, setBtnState] = useState(false);
  const navigate = useNavigate();

  const {
    mutate,
    data: mutData,
    error,
  }: { mutate: any; data: any; error: any } = useMutation(postFunction, {
    onError: (error) => {
      console.log("mutationerror************88", error);
    },
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    setBtnState(true);
    e.preventDefault();
    const sendData = { username, password };
    mutate(JSON.stringify(sendData));
  };

  useEffect(() => {
    setBtnState(false);
    if (mutData) {
      navigate("/dashboard");
    }
  }, [mutData, error]);

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
          <Button onClick={handleLogin} type="submit" disabled={btnState}>
            Login
          </Button>

          {mutData && <div>{mutData.data.message}</div>}
          {error && <div>{error?.response.data.error}</div>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
