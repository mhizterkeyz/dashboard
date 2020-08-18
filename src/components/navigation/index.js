import React from "react";
import "./style.css";
import logo from "../../svg/logo.svg";
import ntv from "../../svg/nav-toggle-vector.svg";
import home from "../../svg/home.svg";
import projects from "../../svg/projects.svg";
import users from "../../svg/users.svg";
import max from "../../svg/max-icon.svg";

const Nav = (() => {
  let navCount = 0;
  return ({ items, className }) => {
    navCount += 1;
    return (
      <ul className={`nav flex-column ${className}`}>
        {items.map((item, i) => {
          return (
            <li
              className={`nav-item ${item.className}`}
              key={`nav-item-${navCount}-${i}`}
            >
              <a
                className={`nav-link ${item.isActive ? "active" : ""}`}
                href={item.link}
              >
                {item.content}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };
})();

const Navigation = ({ initials }) => {
  const nav = [
    {
      link: "#link",
      content: <img className="icon" alt="nav icon home" src={home} />,
    },
    {
      link: "#link",
      content: <img className="icon" alt="nav icon home" src={projects} />,
      isActive: true,
    },
    {
      link: "#link",
      content: <img className="icon" alt="nav icon home" src={users} />,
    },
    {
      link: "#link",
      content: <img className="icon" alt="nav icon home" src={max} />,
    },
  ];
  return (
    <nav className="app-navigation">
      <section className="navigation-section">
        <a href="#link">
          <img src={logo} className="app-logo" alt="site_logo" />
        </a>
      </section>
      <section className="navigation-section">
        <Nav className="page-nav" items={nav} />
      </section>
      <section className="navigation-section">
        <Nav
          className="name-nav"
          items={initials.map(({ initial, theme }) => ({
            link: `#${initial}`,
            content: initial,
            className: `bg-${theme}`,
          }))}
        />
      </section>
      <div className="toggle-btn d-flex justify-content-center">
        <button className="navigation-toggler">
          <img src={ntv} className="icon" alt="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
