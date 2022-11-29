import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  document.body.style.zoom = "110%";
  document.body.style.backgroundColor = "rgb(185, 230, 240)";

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!firstName) {
        setError("You need to enter a first name");
      }
      if (!lastName) {
        setError("You need to enter a last name");
      }
      if (!mail) {
        setError("You need to enter an email");
      }
      if (!msg) {
        setError("Well there is no message to read here");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPhoneNumber = () => {
    return (
      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}/>
    )
  }
  return (
    <div>
      <Navigation />

      <h1>A propos</h1>
      <p>
        This Website's current aim is to improve my React skills, it will most
        likely only be visited by unimpressed recruiters and family members.
      </p>
      <img src="./assets/mail_pikachu.jpg" alt="Pikachu_mail"></img>
      <section className="form">
        <div className="pikachu"></div>
        <p>Contact Us</p>
        <div className="contact-form">
          <label htmlFor="First name">First name</label>
          <input
            id="First name"
            placeholder="First name"
            required={true}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label htmlFor="Last name">Last name</label>
          <input
            id="Last name"
            placeholder="Last name"
            required={true}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label htmlFor="Mobile">Mobile</label>
          <PhoneInput
            id="Mobile"
            defaultValue="+33"
            onChange={getPhoneNumber}
          />
          <label htmlFor="e-mail">E-mail</label>
          <input
            type="email"
            id="E-mail"
            placeholder="E-mail"
            required={true}
            onChange={(e) => setMail(e.target.value)}
          ></input>
          <label htmlFor="Message">Message</label>
          <textarea
            id="Message"
            placeholder="Message"
            minLength={10}
            maxLength={200}
            required={true}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          <input type="submit" onClick={handleSubmit} />
          <p>{error}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
