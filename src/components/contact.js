import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./contact.css";
import Sound from "../audio/beep.mp3";
import useSound from "use-sound";

function Contact() {
  const [play, { stop }] = useSound(Sound);

  return (
    <div className="footer">
      <div className="contact">
        <div className="contacts">
          <div
            onMouseEnter={() => play()}
            onMouseLeave={() => stop()}
            style={{ margin: "3rem" }}
          >
            <a
              className="mail"
              href="mailto:vaishalivaswani1710@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            > <span className="mailbtn">
              CONTACT ME </span>
            </a>
          </div>
          <div className="contacticons">
            <a
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
              href="https://www.linkedin.com/in/bhavesh-kumar-agrawal-0609/"
              className="contact-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
        <br />
      </div>
      <div className="copyright">
        Copyright@
        <span style={{ color: "blueviolet", fontWeight: "500" }}>
          Vaishali Vaswani
        </span>
      </div>
    </div>
  );
}

export default Contact;
