import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import BodyNavigation from "./components/body-navigation";
import ModulesPage from "./pages/modules-page";
import TestsPage from "./pages/test-page";
import { testPage, navInitials, modulePage } from "./data";

const App = () => {
  const [nav, setNav] = useState([]);
  const [profile, setProfile] = useState({});
  const [toggle, setToggle] = useState(false);

  const handleNav = (data) => setNav(data);
  const handleProfile = (data) => setProfile(data);

  return (
    <Router>
      <div className="App">
        <Navigation initials={navInitials} nav={nav} />
        <Header hasNotifications={true} profile={profile} />
        <div className="main-wrapper">
          <div className="container">
            <BodyNavigation bin={toggle} />
            <Switch>
              <Route
                path="/tests"
                render={() => (
                  <TestsPage
                    data={testPage}
                    setNav={handleNav}
                    setProfile={handleProfile}
                    toggle={() => setToggle(true)}
                  />
                )}
              />

              <Route
                render={() => (
                  <ModulesPage
                    data={modulePage}
                    setNav={handleNav}
                    setProfile={handleProfile}
                    toggle={() => setToggle(false)}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
        <div className="app-alert d-none">
          Modules have been created successfully
        </div>
      </div>
    </Router>
  );
};

export default App;
