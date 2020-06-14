import React, { Component } from "react";

const Appname = "The TKM Shows";
const logo = require("../img/tkmshow_white.png");

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="nav das"></nav>
        <div className="justify-content-center">
          <a href="/">
            {" "}
            <img src={logo} height="100px" alt={Appname}></img>
          </a>
        </div>
      </>
    );
  }
}

export default Navbar;
