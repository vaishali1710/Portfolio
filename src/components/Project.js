import React from "react";
import "./Project.css";
import Obstacle1 from "../images/obstacledetectioncar1.PNG";
import Obstacle2 from "../images/obstacledetectioncar2.jpeg";
import Home1 from "../images/homeautomation1.PNG";
import Home2 from "../images/homeautomation2.jpeg";
import Commg from "../images/Commg.jpeg";
import video1 from "../images/Commg.mp4";
import video2 from "../images/Commg2.mp4";

function Project() {
  return (
    <div>
      {/* ************ 1 ***********  */}

      <div className="project">
        <div className="project-border">
          <div className="projectheading">
            <div className="project-name">COMM - G</div>
            <div className="project-technologies">
              <p className="tech">February 2021 - December 2021</p>
              <p className="tech">IOT Technology</p>
              <p className="tech">Graphical Programming</p>
            </div>
          </div>

          <div className="projects">
            <div className="imagepart">
              <img className="img" src={Commg} alt="Joke Extention" />
            </div>
            <div className="textpart">
              <div className="txt">
                A Glove that converts the sign language into speech or gesture
                recognition using some sensors and microcontroller with an
                android application is proposed here.
              </div>
              <div className="links">
                <a
                  className="link"
                  href="https://docs.google.com/document/d/1HN9-1t3EuS5IqfppgoKIhNE1q4fbpYhM/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </div>
            </div>
            <div style={{margin: "0.6rem"}}>
              <video
                src={video1}
                width="500"
                height="250"
                controls="controls"
              />
                  <video
                src={video2}
                width="500"
                height="250"
                controls="controls"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ************ 2 ***********  */}

      <div className="project">
        <div className="project-border">
          <div className="projectheading">
            <div className="project-name">Obstacle Detection Car</div>
            <div className="project-technologies">
              <p className="tech">August 2020 - September 2020</p>
              <p className="tech">IOT Technology</p>
            </div>
          </div>

          <div className="projects">
            <div className="imagepart">
              <img
                className="img"
                src={Obstacle2}
                alt="Obstacle Detecction Car 1"
              />
            </div>
            <div className="textpart">
              <div className="txt">
                Presenting a car that can detect the obstacle. Can be used in
                the applications of following any person secretly while doing
                the mission and in the industry to detect the products on the
                conveyor
              </div>
              <div className="links">
                <a
                  className="link"
                  href="https://docs.google.com/document/d/17ZTve1xzO962vubkV7AfQOn5U0KDqvDP/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </div>
            </div>
            <div className="imagepart">
              <img
                className="img"
                src={Obstacle1}
                alt="Obstacle Detecction Car 2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ************ 3 ***********  */}

      <div className="project">
        <div className="project-border">
          <div className="projectheading">
            <div className="project-name">Home Automation</div>
            <div className="project-technologies">
              <p className="tech">September 2020 - October 2020</p>
              <p className="tech">IOT Technology</p>
            </div>
          </div>

          <div className="projects">
            <div className="imagepart">
              <img className="img" src={Home2} alt="Home Automtion1" />
            </div>
            <div className="textpart">
              <div className="txt">
                Making the home smart by giving commands through mobile
                application "Google Assistant".
              </div>
              <div className="links">
                <a
                  className="link"
                  href="https://docs.google.com/document/d/1BfKUx6QPVcKUvnK2LmCamglg68IM6RsO/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </div>
            </div>
            <div className="imagepart">
              <img className="img" src={Home1} alt="Home Automtion2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
