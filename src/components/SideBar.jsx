import React from "react";
import Icon from "./Icon";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <ul className="nav">
        <li className="nav-item nav-item-active">
          <a href="#!" className="nav-link">
            <Icon icon="office" className="nav-icon" />
            <span className="nav-title">Hotel</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link">
            <Icon icon="airplane" className="nav-icon" />
            <span className="nav-title">Flight</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link">
            <Icon icon="key2" className="nav-icon" />
            <span className="nav-title">Your reservations</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link">
            <Icon icon="cog" className="nav-icon" />
            <span className="nav-title">Settings</span>
          </a>
        </li>
      </ul>

      <div className="copyrights">&copy; 2019. All rights reserved.</div>
    </nav>
  );
};

export default SideBar;
