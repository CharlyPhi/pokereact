import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";
import "react-phone-number-input/style.css";
//import PhoneInput from "react-phone-number-input";
// get Ip country through "react-ipgeolocation";
//import useGeoLocation from "react-ipgeolocation";
import Votes from "../components/Votes";
import Pikachu from "../assets/mail_pikachu.jpg";
import PlayButton from "../assets/play-button.png";
import Pika from "../assets/pikachu-starter.mp3";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Key = process.env.REACT_APP_PUBLIC_KEY;
const template = process.env.REACT_APP_TEMPLATE;
const service = process.env.REACT_APP_SERVICE;

export default function About() {
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  const emailSent = () => {

    toast.success("Your E-mail has been sent ! ", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
};
      const emailNotSent = () => {

        toast.succes("An error has occured, try again ! ", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      };

  document.body.style.zoom = "110%";
  document.body.style.backgroundColor = "rgb(166,231,242,255)";

  // Handles the Form Submit (only the errors at the moment, no actual submit)
  const handleSubmit = (e) => {
    e.preventDefault();

   /* if (!firstName) {
      setError("You need to enter a name");
    } else if (!mail) {
      setError("You need to enter an email");
    } else if (!msg) {
      setError("Well, there is no message to read here");
    } else if (!phone) {
      setError("Well, there is no phone number to read here");
    } else {*/

    emailjs.sendForm(service, template, e.target, Key).then(
      (response) => {
        emailSent();
      },
      (error) => {
        emailNotSent();
      }
    );
    e.target.reset();



};



  //Sounds
  const PikachuCry = new Audio(Pika);
  const PikaCry = () => {
    PikachuCry.play();
  };

  return (
    <div className="about">
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
        <span>Beware Loud !</span>
        <img className="pifacteur" src={Pikachu} alt="Pikachu_mail" />
      </div>

      <div className="form">
          <form className="contact-form" name ="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="FirstName">     </label>
          <input
            name="FirstName"
            placeholder="First Name"
            required={true}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label htmlFor="e-mail"></label>
          <input
            type="email"
            name= "e-mail"
            placeholder="E-mail"
            required={true}
            onChange={(e) => setMail(e.target.value)}
          ></input>
          <label htmlFor="Message"></label>
          <textarea
            name='message'
            placeholder="Type your message"
            minLength={10}
            maxLength={200}
            required={true}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
          </form>
      </div>
    </div>
  );
}






/*
<label htmlFor="Mobile">Mobile</label>
<PhoneInput
  id="Mobile"
  placeholder="Enter phone number"
  value={phone}
  onChange={(e) => setPhone(e.taget.value)}
  defaultCountry={"FR"}
  onCountryChange= {`${useGeoLocation().country}`}
/>
*/


/*

*/
