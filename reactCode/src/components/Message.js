import React, { Component } from "react";

export default class NavBar extends Component {
  state = { activeItem: "message" };

  render() {
    return (
      <div className="message">
        Welcome to Apto! This is a work in progress, please be kind! :)
      </div>
    );
  }
}
