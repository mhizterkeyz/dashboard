import React from "react";
import "./style.css";
import menu from "../../svg/menu.svg";
import fcmb from "../../svg/fcmb.svg";
import search from "../../svg/search.svg";
import bell from "../../svg/bell.svg";
import shield from "../../svg/shield.svg";
import badge from "../../svg/badge.svg";
import chevron from "../../svg/chevron-down.svg";
import user from "../../images/prf1.jpg";

const Header = ({ hasNotifications }) => {
  return (
    <header className="fixed-top fixed-header">
      <div className="inner-wrapper">
        <div className="menu">
          <img src={menu} alt="menu icon" className="icon" />
        </div>
        <div className="brand">
          <img src={fcmb} alt="fcmb logo" className="icon" />
          <span className="tagline">
            <span className="mr-2">FCMB: Mobile Banking</span>{" "}
            <span className="mb-1">...</span>
          </span>
        </div>
        <form className="searchForm">
          <img src={search} className="search-icon icon" alt="search icon" />
          <input placeholder="Search" />
        </form>
        <div
          className={`notification ${
            hasNotifications ? "has-notification" : ""
          }`}
        >
          <img src={bell} alt="bell icon" />
        </div>
        <div className="badge center-content p-2 text-light">
          <img src={shield} alt="shield icon" className="pr-2" />
          OWNER
        </div>
        <div className="owner-badge">
          <img src={badge} alt="badge icon" />
        </div>
        <div className="user-corner center-content">
          <img src={user} alt="avatar" />
          <div className="px-4 bio center-content">
            <span className="d-block name">Chioma Davis</span>
            <span className="email">Chioma@natterbase</span>
          </div>
          <img src={chevron} alt="icon" className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
