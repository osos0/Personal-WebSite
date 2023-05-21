import React from "react";
// import Navbar from "../componantes/Navbar";
import LeftNavbar from "../componantes/LeftNavbar";
import Header from "../componantes/Header";
import FreeLanser from "../componantes/FreeLanser";
import Footer from "../componantes/Footer";
import Navbar from "../componantes/Navbar";

function AboutPage() {
  return (
    <>
      <div className="bgcolor homeCon">
        <div className="row">
          <div className="navoRes">
            <Navbar />
            {/* <TopNavbar /> */}
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <Header />
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

export default AboutPage;
