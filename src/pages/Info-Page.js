import React from "react";
// import Navbar from "../componantes/Navbar";
import LeftNavbar from "../componantes/LeftNavbar";
import Contact from "../componantes/Contact";
import FreeLanser from "../componantes/FreeLanser";
import Footer from "../componantes/Footer";

function Infopage() {
  return (
    <>
      <div className="bgcolor homeCon">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <Contact />
            <FreeLanser />
            <Footer />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 postioOfleftNavbar">
            <LeftNavbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Infopage;
