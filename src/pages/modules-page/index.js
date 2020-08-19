import React, { useEffect } from "react";
import "./style.css";
import plusBlue from "../../svg/plus-blue.svg";
import ellip from "../../svg/ellip.svg";
import plus from "../../svg/plus.svg";
import Columns, { Column } from "../../components/columns";
import Modules, { EmptyModule, Module } from "../../components/modules";

const ModulesPage = ({ data, setNav, setProfile, toggle }) => {
  const { nav, profile, modules } = data;
  useEffect(() => {
    setNav(nav);
    setProfile(profile);
    toggle();
  });
  return (
    <div className="modules-page">
      <Columns>
        {modules.map((elem, i) => {
          return (
            <Column key={`module-${i}`}>
              <h5 className="column-title">
                <span>{elem.title}</span> <img src={ellip} alt="icon" />
              </h5>
              <button className="add-btn">
                <img alt="plus button" src={plusBlue} className="icon" />
              </button>

              <Modules className="module-container">
                {!elem.modules.length ? (
                  <EmptyModule />
                ) : (
                  elem.modules.map((module, j) => {
                    if (module.type) {
                      return (
                        <form key={`modules-module-${i}-${j}`}>
                          <textarea defaultValue={module.text}></textarea>
                        </form>
                      );
                    }
                    return (
                      <Module
                        module={module}
                        key={`modules-module-${i}-${j}`}
                      />
                    );
                  })
                )}
              </Modules>
            </Column>
          );
        })}
      </Columns>
      <button className="add-module-btn">
        <img alt="icon" src={plus} />
      </button>
    </div>
  );
};

export default ModulesPage;
