import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "navbar" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar">
        <Menu secondary>
          <Dropdown item text="Supplements">
            <Dropdown.Menu>
              <Dropdown.Item>Index</Dropdown.Item>
              <Dropdown.Item>By Goal</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name="productsOnTheMarket"
            active={activeItem === "Products on the Market"}
            onClick={this.handleItemClick}
          />
          <Dropdown item text="About">
            <Dropdown.Menu>
              <Dropdown.Item>Our Mission</Dropdown.Item>
              <Dropdown.Item>Meet The Team</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu> */}
        </Menu>
      </div>
    );
  }
}
