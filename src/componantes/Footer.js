import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footerCon">
        <div className="row">
          <div className="col-md-12 col-sm-12 logostylingFooter">
            Ossama Magdy
          </div>

          <div className="col-md-4 col-sm-12 rightFooter">
            <h1>Quick Links</h1>

            <a href="#About">About</a>
            <a href="#Skils">Skils</a>
            <a href="#Contact">Contact</a>
            <a href="#Portfolio">Portfolio</a>
            <a href="#Contact">Services</a>
            <a href="#freelancer">freelancer</a>
          </div>
          <div className="col-md-4 col-sm-12 d-lg-flex d-md-flex d-sm-none rightFooter">
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et. Lorem ipsum is dolor sit
              amet, csectetur adipiscing elit, dolore smod tempor incididunt ut
              labore et.
            </p>
          </div>
          <div className="col-md-4 col-sm-12 rightFooter">
            <h1>Our Infrmatio</h1>
            <div>
              <FontAwesomeIcon icon={faPhone} /> 01280104685
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationPin} />
              Cairo Egypt
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
