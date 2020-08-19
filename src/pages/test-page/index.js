import React, { useEffect } from "react";
import "./style.css";
import Columns, { Column, ColumnLarge } from "../../components/columns";
import Modules, {
  EmptyModule,
  Module,
  TestModule,
  CardModule,
} from "../../components/modules";
import ellip from "../../svg/ellip.svg";

const TestPage = ({ data, setNav, setProfile, toggle }) => {
  const { nav, profile, modules } = data;
  useEffect(() => {
    setNav(nav);
    setProfile(profile);
    toggle();
  });

  return (
    <div className="tests-page">
      <Columns>
        {modules.map((elem, i) => {
          const containerChildren = (
            <>
              <h5 className="column-title">
                <span>{elem.title}</span>{" "}
                {elem.noOptions ? "" : <img src={ellip} alt="icon" />}
              </h5>
              <Modules
                className={
                  elem.large
                    ? `bg-light py-2 ${elem.cards ? "card-elements" : ""}`
                    : ""
                }
              >
                {!elem.modules.length ? (
                  <EmptyModule />
                ) : (
                  elem.modules.map((module, j) => {
                    return elem.tests ? (
                      <TestModule
                        module={module}
                        key={`modules-module-${i}-${j}`}
                      />
                    ) : elem.cards ? (
                      <CardModule
                        module={module}
                        key={`modules-module-${i}-${j}`}
                      />
                    ) : (
                      <Module
                        module={module}
                        key={`modules-module-${i}-${j}`}
                      />
                    );
                  })
                )}
                {elem.tests && (
                  <div className="test-btn">
                    <button className="btn btn-primary">New Test Case</button>{" "}
                    <button className="btn btn-outline-primary">Test</button>
                  </div>
                )}
              </Modules>
            </>
          );
          if (elem.large) {
            return (
              <ColumnLarge key={`module-${i}`}>{containerChildren}</ColumnLarge>
            );
          }
          return <Column key={`module-${i}`}>{containerChildren}</Column>;
        })}
      </Columns>
    </div>
  );
};

export default TestPage;
