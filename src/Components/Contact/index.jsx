import React from "react";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      // service id, template id and your public key, get these by registering on EmailJs
      .sendForm(
        "service_ygcscxm",
        "template_fb2swea",
        form.current,
        "UhVLaZCwOnWwEsqqq"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          navigate("/");
        },
        () => {
          alert(
            "Failed to send the message, please check the contact information on my Resume to contact me"
          );
        }
      );
  };

  return (
    <div className="container-fluid p-5">
      <div
        style={{ textAlign: "center" }}
        className="d-sm-flex align-items-center justify-content-center"
      >
        <button onClick={() => navigate("/")} className="home">
          Home
        </button>
        <h1>Contact Me</h1>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{ listStyle: "none" }} className="p-4">
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  placeholder="Subject"
                  className="form-control form-class"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  className="form-control form-class"
                ></textarea>
              </li>
              <li>
                <input type="submit" className="sendButton" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
        <div>
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json"
            className="player d-md-none d-lg-block"
            loop
            autoplay
            style={{ maxHeight: "500px", maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
