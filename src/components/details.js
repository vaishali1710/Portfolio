import React from "react";
import "./details.css";
import { Link } from "react-router-dom";
import Projects from "./Project";
import Internship from "./Internship";

function Details() {
  return (
    <>
      <div className="detaildiv">
        <div className="detail">
          <div className="skills sect">
            <div className="head">Skills</div>
            <div className="list">
              <li>C/C++</li>
              <li>MATLAB, LabVIEW</li>
              <li>
                Robotics, Industrial Automation
              </li>
              <li>PLC simulation, Pneumatics, Process Control</li>
              <li>IOT, Ardino</li>
            </div>
          </div>
          <div className="tools sect">
            <div className="head">Strengths</div>
            <div className="list">
              <li>Quick Learner</li>
              <li>Leadership</li>
              <li>Team Worker</li>
              <li>Goal-Oriented Multitasking</li>
              <li>Effective Communication</li>
            </div>
          </div>
          <div className="achivements sect">
            <div className="head">Research Publications</div>
            <div className="list">
              <li>
                <span style={{ fontWeight: "600" }}>Vaishali Vaswani,</span>
                Akriti Kumari Singh, Anshuman Shastri and Namrata Arora Charpe,
                “COMM-G: A Communication Glove for Smart Communication”,
                Wearable Technologies, Social and Affective Computing, IHIET-AI
                2022, International Conference on Human Interaction and Emerging
                Technologies (Accepted)
              </li>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="buttons">
          <div className="btndivision">
            <Link className="btn" to="/Internship" component={Internship}>
              Training
            </Link>
          </div>
          <div className="btndivision">
            <Link className="btn" to="/Project" component={Projects}>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
