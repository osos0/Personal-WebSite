import React from "react";
import Email from "../img/email2.png";
import whatsapp from "../img/whatsapp2.png";
import messenger from "../img/messenger2.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="row contactusCon">
        <h1>CONTACT Us</h1>
        <hr />
        <div className="col-md-4 col-sm-12 mesconleft">
          <div className="mail mesconchild">
            <Link to="mailto:osama_magdy0@yahoo.com" target="_blank">
              <div className="imgContactCon">
                <img src={Email} alt="email" />
              </div>
              <h4>Email</h4>
              <h5>osama_magdy0@yahoo.com</h5>
              Send a message
            </Link>
          </div>
          <div className="whatsApp mesconchild">
            <Link
              to="https://api.whatsapp.com/send?phone=201280104685"
              target="_blank"
            >
              <div className="imgContactCon">
                <img src={whatsapp} alt="mes" />
              </div>{" "}
              <h4>WhatsApp</h4>
              <h5>201280104685</h5>
              Send a message
            </Link>
            {/* <!-- <a href="https://wa.me/201280104685?text=Hello,%20I%20am%20contacting%20you%20from%20my%20website." target="_blank">Send a message</a> --> */}
          </div>
          <div className="Messenger mesconchild">
            <Link to="http://m.me/osama.magdy/" target="_blank">
              <div className="imgContactCon">
                <img src={messenger} alt="mes" />
              </div>
              <h4>Messenger</h4>
              <h5>Ossama Magdy</h5>
              Send a message
            </Link>
            {/* <a href="http://m.me/osama.magdy/" target="_blank">
              Send a message
            </a> */}
          </div>
        </div>
        <div className="col-md-8 col-sm-12 mesconright">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required="required"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required="required"
          />
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required="required"
          ></textarea>
          <button className="btnReverse" type="">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
