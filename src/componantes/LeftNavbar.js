import React from "react";
import phot from "../img/phot.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";

const LeftNavbar = () => {
  return (
    <section className="leftNavbar">
      <div className="intoConOfleftNav">
        <ul>
          <li>
            <div className="phototFram">
              <img src={phot} alt="phot" />
            </div>
          </li>
          <li>
            <h2>Ossama Magdy</h2>
          </li>
          <li>
            <div>
              <h5>
                <Link to="/">Home</Link>
              </h5>
            </div>
          </li>
          <li>
            <div>
              <h5>
                <Link to="/about">About</Link>
              </h5>
            </div>
          </li>
          <li>
            <div>
              <h5>
                <Link to="/skills">Skills</Link>
              </h5>
            </div>
          </li>
          <li>
            <div>
              <h5>
                <Link to="/Portfolio">Portfolio</Link>
              </h5>
            </div>
          </li>
          <li>
            <div>
              <h5>
                <Link to="/info">Contact Us</Link>
              </h5>
            </div>
          </li>
          <li>
            <div>
              <Link to="https://github.com/osos0" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/ossama-magdy-6b8a3b263/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=201280104685"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link to="http://m.me/osama.magdy/" target="_blank">
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LeftNavbar;
