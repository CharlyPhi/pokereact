import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import useGeoLocation from "react-ipgeolocation";
import Votes from "../components/Votes";


const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  // get Ip country through "react-ipgeolocation";

  document.body.style.zoom = "110%";
  document.body.style.backgroundColor = "rgb(166,231,242,255)";

  // Handles the Form Submit (only the errors at the moment, no actual submit)
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

  return (
    <div>
      <Navigation />
      <br></br>
      <h1>A propos</h1>
      <div className="about-top">
        <div className="about-top-left">
      <p className="about-top-text">
        This Website's current aim is to improve my React skills, it will most
        likely only be visited by unimpressed recruiters and family members. Use the vote below to help me choose the next feature to implement. If you have any input regarding what could be improved use the form below and send me an email !
      </p>
      <div className="vote">
        <Votes/>
      </div>
      </div>
      <img className = "pifacteur" src="/mail_pikachu.jpg" alt="Pikachu_mail"></img>
      </div>

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
            international
            countryCallingCodeEditable={false}
            placeholder="Enter phone number"
            defaultCountry={`${useGeoLocation().country}`}
            defaultValue="+33"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
