import React, { useState } from "react";
import axios from "axios";

export default function Login({ handleSuccessfulAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.logged_in) {
          handleSuccessfulAuth(res.data.user);
        }
      })
      .catch((error) => {
        console.log("login Error", error);
      });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="username"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button className="button-10" type="Submit">
          Log in
        </button>
      </form>
    </div>
  );
}