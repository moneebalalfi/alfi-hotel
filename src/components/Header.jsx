import React, { Component } from "react";
import Logo from "../images/logos/logo.svg";
import Icon from "./Icon";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />

        <form action="#" className="form">
          <input type="search" className="form-input" placeholder="Search..." />
          <button className="form-button">
            <Icon icon="search" className="form-icon" />
          </button>
        </form>

        <nav className="nav">
          <div className="nav-icon">
            <Icon icon="badge" className="nav-icon-svg" />
            <span className="nav-icon-noti">2</span>
          </div>
          <div className="nav-icon">
            <Icon icon="chat" className="nav-icon-svg" />
            <span className="nav-icon-noti">9</span>
          </div>
          <div className="nav-img">
            <img
              src={require("../images/hotel/user.jpg")}
              alt="user"
              className="nav-img-image"
            />
            <span className="nav-img-name">Mery Kactel</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
