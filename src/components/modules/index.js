import React, { useState, useEffect } from "react";
import "./style.css";
import clock from "../../svg/clock.svg";
import ellip from "../../svg/ellip.svg";
import caret from "../../svg/caret-light.svg";
import caretdark from "../../svg/chevron-down.svg";
import search from "../../svg/search.svg";
import checkMark from "../../svg/check-mark.svg";
import bag from "../../svg/bag.svg";

export const Container = ({ children, className }) => {
  return <div className={`module-content ${className}`}>{children}</div>;
};

export const EmptyModule = ({ className }) => {
  return <div className={`module-empty ${className}`}></div>;
};

export const Module = (() => {
  let avatarCount = 0;
  return ({ className, module }) => {
    return (
      <div className="module">
        <div className="group">
          <p>{module.text}</p>
          <img alt="icon" className="mt-2" src={ellip} />
        </div>

        <div className="group">
          <span className="center-content">
            <img alt="icon" src={clock} className="icon mr-2" />{" "}
            <span>{module.date}</span>
          </span>
          <div className="avatars">
            {module.avatars.map((avatar, k) => {
              avatarCount += 1;
              return k < 4 ? (
                <img
                  alt="avatar"
                  src={avatar}
                  key={`module-avatar-${avatarCount}`}
                />
              ) : k === 4 ? (
                <div
                  key={`module-avatar-${avatarCount}`}
                  className="overflow center-content-inline"
                >
                  +{module.avatars.length - 4}
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    );
  };
})();

export const TestModule = ({ className, module }) => {
  const [data, setData] = useState({
    status: "",
    description: "",
  });
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setData(module);
  }, [module]);

  const { status, description } = data;
  const handleStatus = (status) => setData({ ...data, status });

  return (
    <div className={`test-module test-${status} ${className}`}>
      <p>{description}</p>
      <div>
        <button onClick={() => setToggled(!toggled)}>
          <span>{status}</span> <img src={caret} alt="icon" className="icon" />
          <div className={`dropdown ${toggled ? "" : "d-none"}`}>
            <form>
              <img alt="search icon" src={search} className="icon" />
              <input type="search" placeholder="Search Name" />
              <img alt="search icon" src={caretdark} className="icon caret" />
            </form>
            <ul className="list-unstyled">
              <li
                onClick={() => handleStatus("pass")}
                className={status === "pass" ? "active" : ""}
              >
                Pass <img alt="icon" src={checkMark} className="icon" />
              </li>
              <li
                onClick={() => handleStatus("failed")}
                className={status === "failed" ? "active" : ""}
              >
                Failed <img alt="icon" src={checkMark} className="icon" />
              </li>
              <li
                onClick={() => handleStatus("retest")}
                className={status === "retest" ? "active" : ""}
              >
                Retest <img alt="icon" src={checkMark} className="icon" />
              </li>
            </ul>
            <p>Untest</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export const CardModule = ({ className, module }) => {
  return (
    <div className={`card-module ${className}`}>
      <div className={`card-content card-${module.bg}`}>
        <div className="group">
          <img alt="icon" src={bag} className="icon" />
          {module.data}
        </div>
        <div className="group">{module.title}</div>
      </div>
    </div>
  );
};

export default Container;
