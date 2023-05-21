import React from "react";
// import Navbar from "../componantes/Navbar";
import LeftNavbar from "../componantes/LeftNavbar";
import Skills from "../componantes/Skills";
import FreeLanser from "../componantes/FreeLanser";
import Footer from "../componantes/Footer";

function SkillsPage() {
  return (
    <>
      <div className="bgcolor homeCon">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <Skills />
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

export default SkillsPage;
