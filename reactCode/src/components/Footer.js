import React, { Component } from "react";
import { Menu, Container, Grid } from "semantic-ui-react";

export default class Footer extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="footer">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Menu text vertical>
                <Menu.Item header>Sort By</Menu.Item>
                <Menu.Item
                  name="closest"
                  active={activeItem === "closest"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="mostComments"
                  active={activeItem === "mostComments"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="mostPopular"
                  active={activeItem === "mostPopular"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column>
              <Menu text vertical>
                <Menu.Item header>Sort By</Menu.Item>
                <Menu.Item
                  name="closest"
                  active={activeItem === "closest"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="mostComments"
                  active={activeItem === "mostComments"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="mostPopular"
                  active={activeItem === "mostPopular"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
