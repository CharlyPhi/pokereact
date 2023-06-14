import React, { useState } from "react";
import axios from "axios";

export default function Registration({ handleSuccessfulAuth }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleSubmit = (e) => {
    axios
      .post(
        "https://pokerails-api-for-pokereact.onrender.com/registrations",
        {
          user: {
            email: email,
            username: username,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "created") {
          handleSuccessfulAuth(res.data.user);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
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
        ></input>
        <input
          type="password_confirmation"
          name="password_confirmation"
          placeholder="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
        ></input>
        <button className="button-10" type="Submit">
          Register
        </button>
      </form>
    </div>
  );
}
