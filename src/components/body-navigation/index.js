import React, { useState } from "react";
import "./style.css";
import clock from "../../svg/clock.svg";
import calender from "../../svg/calender.svg";

const BodyNavigation = ({ bin }) => {
  /**
   * Switch state on modules page
   */
  const [allModules, setAllModules] = useState(true);

  return (
    <div className="body-nav">
      <div className="body-nav-contents">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#link">
              Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link">
              Teams
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#link">
              {bin ? "Tests" : "Modules"}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link">
              Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link">
              Progress
            </a>
          </li>
        </ul>

        <div className="utilities center-content">
          <div
            className={`group center-content-inline mr-5 ${
              bin ? "d-none" : ""
            }`}
          >
            <span className="mr-3 all-text">All Task</span>
            <div className="switch-input mr-3">
              <input
                type="checkbox"
                onChange={() => setAllModules(!allModules)}
                checked={allModules}
              />
              <label className="switch"></label>
            </div>
            <span className={`green ${allModules ? "checked" : ""}`}>
              All Modules
            </span>
          </div>

          <div className="group center-content-inline">
            <img
              src={bin ? calender : clock}
              alt="clock icon"
              className="icon mr-3"
            />
            <span className="project">
              Project Deadline : {bin ? "10-june-2020" : "6 weeks"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyNavigation;
