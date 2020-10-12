import React, { Component } from "react";
// import { Link } from "react-router-dom";

export default class Header extends Component {
  headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
  };

  linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  render() {
    return (
      <header style={this.headerStyle}>
        <h1>TodoList</h1>
        {/* <Link style={this.linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={this.linkStyle} to="/about">
          About
        </Link> */}
      </header>
    );
  }
}
