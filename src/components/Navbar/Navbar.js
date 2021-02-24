import React, { Component } from "react";
import Menuitems from "./Menuitems";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          SpaceX<i className="fas fa-rocket"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path} className={item.cName} onClick={this.handleClick} activeClassName="isactive">{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
