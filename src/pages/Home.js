import React from "react";
// import Navbar from "../componantes/Navbar";
import LeftNavbar from "../componantes/LeftNavbar";
import Header from "../componantes/Header";
import Skills from "../componantes/Skills";
import Portfolio from "../componantes/Portfolio";
import Services from "../componantes/Services";
import Contact from "../componantes/Contact";
import FreeLanser from "../componantes/FreeLanser";
import Footer from "../componantes/Footer";
import JavascriptApps from "../componantes/JavascriptApps";

function Home() {
  return (
    <>
      <div className="bgcolor homeCon">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-9">
            <Header />
            <Skills />
            <Portfolio />
            <JavascriptApps />
            <Services />
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

export default Home;
