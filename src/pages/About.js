import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// get Ip country through "react-ipgeolocation";
import useGeoLocation from "react-ipgeolocation";
import Votes from "../components/Votes";
import Pikachu from "../assets/mail_pikachu.jpg";
import PlayButton from "../assets/play-button.png";
import Pika from "../assets/pikachu-starter.mp3";

export default function About() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [value, setValue] = useState();
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

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
      if (!value) {
        setError("Well there is no phone number to read here");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Sounds
  const PikachuCry = new Audio(Pika);
  const PikaCry = () => {
    console.log("Pika Pika");
    PikachuCry.play();
  };

  return (
    <div>
      <Navigation />
      <div className="banner"></div>
      <br></br>
      <h1>A propos</h1>
      <div className="about-top">
        <div className="about-top-left">
          <p className="about-top-text">
            This Website's current aim is to improve my React skills, it will
            most likely only be visited by unimpressed recruiters and family
            members. Use the vote below to help me choose the next feature to
            implement. If you have any input regarding what could be improved
            use the form below and send me an email !
          </p>
          <div className="vote">
            <Votes />
          </div>
        </div>
        <img
          className="play-button"
          src={PlayButton}
          alt="Play Button"
          onClick={() => PikaCry()}
        />
        <img className="pifacteur" src={Pikachu} alt="Pikachu_mail" />
      </div>

      <section className="form">
        <p>
          "You didnt notice this color change" <span>Obi-Wan-Kenobi</span>
        </p>
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
            value={value}
            placeholder="Enter phone number"
            onChange={(e) => setValue(e.target.value)}
            defaultCountry={`${useGeoLocation().country}`}
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
}
