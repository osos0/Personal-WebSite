import React from "react";
import LeftNavbar from "../componantes/LeftNavbar";
import Contact from "../componantes/Contact";
import FreeLanser from "../componantes/FreeLanser";
import Footer from "../componantes/Footer";
import Projectdetails from "../componantes/Projectdetails";

const Project = () => {
  return (
    <div className="bgcolor homeCon">
      <div className="bgcolor homeCon">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <Projectdetails />
            <Contact />
            <FreeLanser />
            <Footer />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 postioOfleftNavbar">
            <LeftNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
