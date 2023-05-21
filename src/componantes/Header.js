import React from "react";
import mainpic from "../img/main2.png";

const Header = () => {
  return (
    <section id="About">
      <div className="row headerCon">
        <div className="col-lg-7 col-md-7 col-sm-12">
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
          <button className="btnReverse">Hire Me</button>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12 mainPicCon">
          <img src={mainpic} alt="main" className="mainPic" />
        </div>
      </div>
    </section>
  );
};

export default Header;
