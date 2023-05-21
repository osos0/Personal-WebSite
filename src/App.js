import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/main.scss";
import Home from "./pages/Home";
import Project from "./pages/Project";
import SkillsPage from "./pages/Skills-Page";
import AboutPage from "./pages/About-Page";
import PortfolioPage from "./pages/Portfolio-Page";
import Infopage from "./pages/Info-Page";
// import Contactuspage from "./pages/contactUs-Page";
// import Contactus from "./pages/Contactus-Page";
// import Navbar from "./componantes/Navbar";
// import Footer from "./componantes/Footer";
// import LeftNavbar from "./componantes/LeftNavbar";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/info" element={<Infopage />} />
        {/* <Route path="/contactus" element={<Contactuspage />} /> */}
        <Route path="/project/:proid" element={<Project />} />
        {/* <Route path="/app/:appid" element={} /> */}
      </Routes>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default App;
