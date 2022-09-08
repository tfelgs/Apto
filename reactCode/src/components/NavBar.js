import React, { Component } from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import SupplementIndex from "../pages/SupplementIndex";
import ByGoal from "../pages/ByGoal";
import ProductsOnTheMarket from "../pages/ProductsOnTheMarket";
import MeetTheTeam from "../pages/MeetTheTeam";
import OurMission from "../pages/OurMission";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Router>
          <div className="navbar">
            <Menu secondary>
              <Menu.Item>
                <Image
                  width={50}
                  as={Link}
                  src={require("../images/logo.png")}
                  to="/Home"
                ></Image>
              </Menu.Item>
              <Dropdown item text="Supplements">
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="Supplement Index"
                    as={Link}
                    to="/SupplementIndex"
                    onClick={this.handleItemClick}
                  />
                  <Dropdown.Item
                    text="By Goal"
                    as={Link}
                    to="/ByGoal"
                    onClick={this.handleItemClick}
                  />
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item
                name="Products on the Market"
                as={Link}
                to="/ProductsOnTheMarket"
                onClick={this.handleItemClick}
              />
              <Dropdown item text="About">
                <Dropdown.Menu>
                  <Dropdown.Item
                    text="Our Mission"
                    as={Link}
                    to="/OurMission"
                    onClick={this.handleItemClick}
                  />
                  <Dropdown.Item
                    text="Meet The Team"
                    as={Link}
                    to="/MeetTheTeam"
                    onClick={this.handleItemClick}
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
          </div>
          <div className="content">
            <Routes>
              <Route path="Home" element={<Home />}></Route>
              <Route
                path="SupplementIndex"
                element={<SupplementIndex />}
              ></Route>
              <Route path="ByGoal" element={<ByGoal />}></Route>
              <Route
                path="ProductsOnTheMarket"
                element={<ProductsOnTheMarket />}
              ></Route>
              <Route path="MeetTheTeam" element={<MeetTheTeam />}></Route>
              <Route path="OurMission" element={<OurMission />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
