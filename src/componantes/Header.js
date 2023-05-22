import React from "react";
import mainpic from "../img/main2.png";
import ballon from "../img/ballon.png";
import squareimg from "../img/square-dots-orange.png";
import twobalone from "../img/twobalone.png";
import squareimg2 from "../img/squareimg.png";
import cv from "../img/ossama_magdy_cv.pdf";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section id="About">
      <div className="row headerCon">
        <div className="col-lg-7 col-md-7 col-sm-12 mainLeftCon">
          <h5>Hi There</h5>
          <div>
            I'm <h1 className="goldh2">Ossama Magdy</h1>
          </div>
          <p>
            As a front-end developer, I pride myself on building clean, elegant,
            and functional user interfaces using HTML, CSS, and JavaScript.
            Whether it's crafting responsive layouts, designing intuitive user
            experiences, or creating dynamic animations, I always strive to
            create a seamless and enjoyable experience for users. With a keen
            eye for detail and a passion for innovation, I'm dedicated to
            delivering high-quality code that is both performant and scalable,
            ensuring that my applications can stand the test of time."
          </p>
          <p className="frontpr">Frontend Developer</p>
          <Link
            className="btnReverse"
            to={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </Link>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 mainPicCon">
          <img src={mainpic} alt="main" className="mainPic" />
        </div>
        <img src={ballon} alt="ballon" className="balon" />
        <img src={squareimg} alt="squareimg" className="squareimg" />
        <img src={twobalone} alt="twobalone" className="twobalone" />
        <img src={squareimg2} alt="squareimg2" className="squareimg2" />
      </div>
    </section>
  );
};

export default Header;
