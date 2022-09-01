import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default class Footer extends Component {
  state = { activeItem: "footer" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="footer">
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
        </Menu>
      </div>
    );
  }
}
