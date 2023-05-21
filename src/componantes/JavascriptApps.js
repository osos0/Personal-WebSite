import React, { useState } from "react";
import JavascriptData from "./JavaScriptApps-Data";
import { Link } from "react-router-dom";

const JavascriptApps = () => {
  const ProjectArray = JavascriptData;
  const [CardLimit, setCardLimit] = useState(3);

  const HandelCardLimit = () => {
    setCardLimit(CardLimit + 6);
  };
  return (
    <section id="JavascriptApps">
      <div className="row FatherofporCon2">
        <h1>Javascript Apps</h1>
        {ProjectArray.slice(0, CardLimit).map((pro, ind) => {
          return (
            <div key={pro.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="portCon2">
                <div className="projectImgCon2">
                  <img src={require(`../img/${pro.imag}`)} alt="proimg" />
                  {/* <img src={pro.imag} alt="proimg" /> */}
                </div>
                <h2>{pro.name}</h2>
                <div className="btnCon2">
                  <Link className="btnReverse m-1" target="_blank">
                    Details
                  </Link>
                  <Link
                    to={pro.Linko}
                    className="btnReverse m-1"
                    target="_blank"
                  >
                    Demo
                  </Link>
                  <Link className="btnReverse">code</Link>
                </div>
              </div>
            </div>
          );
        })}
        <button className="btnReverse " onClick={HandelCardLimit}>
          View More
        </button>
      </div>
    </section>
  );
};

export default JavascriptApps;
