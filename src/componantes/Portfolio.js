import { React, useState } from "react";
import ProjectsData from "./Portfolio-Data";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const ProjectArray = ProjectsData;
  const [CardLimit, setCardLimit] = useState(2);

  const HandelCardLimit = () => {
    setCardLimit(CardLimit + 2);
  };

  return (
    <section id="Portfolio">
      <div className="row FatherofporCon">
        <h1>Portfolio</h1>
        {ProjectArray.slice(0, CardLimit).map((pro, ind) => {
          return (
            <div key={pro.id} className="col-lg-6 col-md-6 col-sm-12">
              <div className="portCon">
                <div className="projectImgCon">
                  <img src={require(`../img/${pro.imag}`)} alt="proimg" />
                  {/* <img src={pro.imag} alt="proimg" /> */}
                </div>
                <h2>{pro.name}</h2>
                <div className="btnCon">
                  <Link
                    to={`/project/${pro.id + 1}`}
                    className="btnReverse m-1"
                  >
                    Details
                  </Link>
                  <Link
                    to={pro.linko}
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
        <button className="btnReverse" onClick={HandelCardLimit}>
          View More
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
