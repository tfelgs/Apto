import React, { Component } from "react";

export default class Footer extends Component {
  state = { activeItem: "footer" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return <div className="footer"></div>;
  }
}
