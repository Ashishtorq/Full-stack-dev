import React, { Fragment } from "react";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <header className="header-containter">
        <div className="logo">
          <img
            src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png"
            alt="Puma logo"
          />
        </div>
        <div className="head-content">
          <ul className="list-item">
            <input
              type="text"
              className="search_input"
              placeholder="Search for goods"
            />
            <li>Home</li>
            <li>About</li>
            <li>Contack</li>
            <li>Outlet</li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
