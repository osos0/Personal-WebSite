import React from "react";
import phot from "../img/phot.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const TopNavbar = () => {
  return (
    <section className="leftNavbar2">
      <div className="intoConOfleftNav2">
        <ul>
          <li>
            <div className="phototFram2">
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
              <Link>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopNavbar;
