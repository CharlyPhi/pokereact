import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [registrationErrors, setRegistrationErrors] = useState("");


  const handleSubmit = (e) => {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("registrations ok", res);
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
        <button type="Submit">Register</button>
      </form>
    </div>
  );
}
