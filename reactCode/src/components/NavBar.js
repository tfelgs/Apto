import React, { Component } from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../logo.png";
import Home from "../pages/Home";
import SupplementIndex from "../pages/SupplementIndex";
import ByGoal from "../pages/ByGoal";
import ProductsOnTheMarket from "../pages/ProductsOnTheMarket";
import MeetTheTeam from "../pages/MeetTheTeam";
import OurMission from "../pages/OurMission";

export default class NavBar extends Component {
  state = { activeItem: "navbar" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="navbar">
        <Router>
          <Menu secondary>
            <Menu.Item>
              <Image as={Link} src={require("../logo.png")} to="/Home"></Image>
            </Menu.Item>
            <Dropdown item text="Supplements">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/SupplementIndex">Supplement Index</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/ByGoal">By Goal</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Link to="/ProductsOnTheMarket">Products on the Market</Link>
            </Menu.Item>
            <Dropdown item text="About">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/OurMission">Our Mission</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/MeetTheTeam">Meet The Team</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Routes>
            <Route path="Home" element={<Home />}></Route>
            <Route path="SupplementIndex" element={<SupplementIndex />}></Route>
            <Route path="ByGoal" element={<ByGoal />}></Route>
            <Route
              path="ProductsOnTheMarket"
              element={<ProductsOnTheMarket />}
            ></Route>
            <Route path="MeetTheTeam" element={<MeetTheTeam />}></Route>
            <Route path="OurMission" element={<OurMission />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
