import React, { Component } from "react";
import logo from "../imgs/logo.png";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} width="200" class="d-inline-block align-top" alt="" />
        </a>
        <button>Purchase Now</button>
      </nav>
    );
  }
}
