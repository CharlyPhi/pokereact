import React from "react";
import Navigation from "../components/Navigation";
import { useState } from "react";

const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  document.body.style.zoom = "110%";
  document.body.style.backgroundColor = "lightblue";

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
  console.log(firstName);
  return (
    <div>
      <Navigation />

      <h2>A propos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        voluptates dicta harum ad sed, incidunt dolor, autem quae mollitia
        accusamus cum accusantium rerum rem sint pariatur veniam possimus
        assumenda odit! Tempore omnis nostrum alias quo, nulla corporis esse
        pariatur repellendus earum iure? Blanditiis possimus voluptates officia
        optio maxime quisquam maiores nihil quam explicabo sint earum
        laudantium, voluptatibus dicta sed vel quia corrupti perferendis unde
        at! Odio quidem sapiente necessitatibus quaerat! Aspernatur ducimus
        maiores maxime. Amet exercitationem vel suscipit molestiae nostrum
        deleniti laboriosam qui dolore, cupiditate debitis, inventore modi
        ratione, quia eaque nemo quam cum tempore illo eos facilis corporis
        libero? Labore, exercitationem dolor suscipit sequi iusto vel, ipsum,
        rerum voluptates quod distinctio reiciendis optio mollitia ad eius
        eveniet doloremque perferendis alias omnis quisquam ratione magni
        laboriosam aliquid. Doloremque fugit vel dolorem earum harum labore
        cupiditate fuga sint iure voluptates. Odio, quibusdam laborum? Alias, ut
        voluptatibus. Est, ipsa voluptas quisquam voluptates vel, dolor
        assumenda odit labore hic sint eum atque reiciendis, illo possimus
        voluptatem minima reprehenderit! Deleniti veniam, accusamus enim ea,
        dolorem exercitationem distinctio minus eveniet tenetur quaerat
        reiciendis necessitatibus, voluptate eum asperiores cupiditate
        aspernatur. Iusto repudiandae cum maxime reprehenderit minima magnam
        quaerat asperiores repellat necessitatibus officia totam est sint fugiat
        tenetur, beatae, optio illum quo nostrum saepe sapiente ipsa iste
        dolores corrupti. Cupiditate a libero ut nostrum vel suscipit recusandae
        laudantium, eligendi voluptate vero architecto quis maxime, ullam
        voluptas voluptatibus eveniet nam accusamus labore, possimus tenetur
        natus explicabo harum reprehenderit? Error consequuntur repudiandae
        libero autem nostrum ad, rem, vero explicabo possimus sed animi?
        Asperiores a architecto molestias sit quibusdam earum ullam. Delectus
        consectetur enim labore corporis. Nam quasi sint eius molestias quia ut.
        Harum soluta odit quia aspernatur illo incidunt explicabo id doloribus,
        eveniet fuga, dicta odio omnis sit ipsum fugit expedita maiores
        veritatis itaque, voluptates error necessitatibus nobis ipsam est?
        Deserunt minus nobis obcaecati fugit quae corrupti exercitationem minima
        iure provident!
      </p>

      <section className="form">
        <div className="pikachu">
          <img src="assets/waving-pikachu2.gif" alt="sleepingPikachu"></img>
        </div>
        <p>
          If you have any remark or just want to tell us who's your favorite
          pokemon please use this form.
        </p>
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
        <label htmlFor="Mobile">
          Mobile (enter your number to receive a sms confirmation)
        </label>
        <input
          id="Mobile"
          defaultValue="+33"
          onChange={(e) => setMobile(e.target.value)}
        ></input>
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
      </section>
    </div>
  );
};

export default About;
