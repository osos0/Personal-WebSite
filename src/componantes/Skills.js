import React from "react";
import Html from "../img/HTML.png";
import css from "../img/CSS3.png";
import Js from "../img/JavaScript.png";
import react from "../img/ReactJs.png";
import gitHub from "../img/GitHub.png";
import bootstrap from "../img/Bootstrap.png";
import git from "../img/Git.png";
import next from "../img/NextJs.png";
import sass from "../img/Sass.png";

const Skills = () => {
  return (
    <section id="Skils">
      <div>
        <div className="row skillsCon">
          <h1>Skills</h1>
          <hr />
          <p>
            I have finished these items in the section and I am confident that I
            can work with them effectively.
          </p>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={Html} alt="sk" />
              <p>HTML</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={css} alt="sk" />
              <p>CSS</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={Js} alt="sk" />
              <p>Javascript</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={react} alt="sk" />
              <p>React Js</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={bootstrap} alt="sk" />
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={gitHub} alt="sk" />
              <p>GitHub</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={git} alt="sk" />
              <p>Git</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={next} alt="sk" />
              <p>Next Js</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 sm-6 ">
            <div>
              <img src={sass} alt="sk" />
              <p>Sass</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
