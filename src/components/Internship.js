import React from "react";
import "./Project.css";
import ISRO from "../images/isro.jpeg";
import Verzeo from "../images/verzeo.jpeg"

function Traning() {
  return (
    <div>
      {/*        1        */}
      <div className="project">
        <div className="project-border">
          <div className="projectheading">
            <div className="project-name">
            
            National Remote Sensing Centre-Indian Space Research
            Organisation (NRSC-ISRO), Hyderabad
            </div>
            <div className="project-technologies">
              <p className="tech">July 2021- December 2021</p>
            </div>
          </div>

          <div className="projects">
            <div className="imagepart">
              <img className="imag" src={ISRO} alt="ISRO" />
            </div>
            <div className="textpart">
              <div className="txt">
                
              Study and simulation of control systems to track the LEO
              satellite.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*        2        */}

      <div className="project">
        <div className="project-border">
          <div className="projectheading">
            <div className="project-name">Verzeo, India</div>
            <div className="project-technologies">
              <p className="tech">August 2020 - October 2020</p>
              <p className="tech"></p>
            </div>
          </div>

          <div className="projects">
            <div className="imagepart">
              <img className="imag" src={Verzeo} alt="Verzeo" />
            </div>
            <div className="textpart">
              <div className="txt">
              IOT Technology, Arduino Coding, and Microcontroller
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traning;
