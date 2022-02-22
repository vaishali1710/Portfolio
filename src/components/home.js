import React from "react";
import "./home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BadgeIcon from "@mui/icons-material/Badge";
import Details from "./details";
import Contact from "./contact";
import Sound from "../audio/beep.mp3";
import useSound from "use-sound";
import img from "../images/img.jpeg";

function Home() {
  const [play, { stop }] = useSound(Sound);

  return (
    <div className="home">
      <div className="firstsection">
        <div className="detai">
          <div className="name">Vaishali Vaswani</div>
          <div className="About">
            <p className="aboutdetail">Bachelor of Technology</p>
            <p style={{marginLeft: "0.6rem"}} className="aboutdetail">Mechatronics Engineering</p>
            <p style={{marginLeft: "0.6rem", fontWeight: "600", fontSize: "1.1rem"}}>Banasthali Vidyapith, Jaipur, India</p>
          </div>
          <div className="vision">
            <h4 className="visionheading">Vision</h4>
            <p className="visiontext">I feel alive not because I breathe just because I learn daily</p>
          </div>
        </div>
        <div>
          <img className="photo" src={img} alt="myimage" />
        </div>
      </div>
      <div className="images">
        <div
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
          className="images-content1"
        >
          <BadgeIcon className="badgeimage" style={{ fontSize: "1.8rem" }} />
          <a
            className="iconstext"
            href="https://drive.google.com/file/d/1lhmtDKAutIKdDRJgb5OejUIJW0OHNZlu/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <audio id="beep" preload="auto">
            <source src={Sound} />
          </audio>
        </div>
        <div
          onMouseEnter={() => play()}
          onMouseLeave={() => stop()}
          className="images-content2"
        >
          <LinkedInIcon className="badgeimage" style={{ fontSize: "1.8rem" }} />
          <a
            className="iconstext"
            href="https://www.linkedin.com/in/vaishali-vaswani-33959a17b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div>
        <Details />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
