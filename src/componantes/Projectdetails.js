import React from "react";
import { useParams } from "react-router-dom";
import ProjectsData from "./Portfolio-Data";

const Projectdetails = () => {
  const paramsNum = useParams().proid;
  const dataObj = ProjectsData;
  return (
    <>
      <div className="container">
        <div className="row detailsCon">
          <div className="col-lg-5 col-md-6 col-sm-6 detailsleft">
            <img src={require(`../img/00${paramsNum}.jpeg`)} alt="pro" />
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6 detailsRight">
            <div>
              <h2 className="">Project Name :</h2>
              {dataObj[paramsNum - 1].name}
            </div>
            <div>
              <h2 className="">Technologys :</h2>
              <div className="mapCon">
                {dataObj[paramsNum - 1].tech.map((te) => {
                  return (
                    <>
                      <div key={te.id} className="lanCon">
                        <img src={require(`../img/${te}.png`)} alt="lan" />
                        <p>{te}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="">Languges :</h2>
              {dataObj[paramsNum - 1].Lan}
            </div>
            <div>
              <h2 className="">Responsive :</h2>
              {dataObj[paramsNum - 1].Responsive}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectdetails;
