import React, { Component } from "react";
import { Menu, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import SupplementIndex from "../pages/SupplementIndex";
import ByGoal from "../pages/ByGoal";
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
                  to="/"
                ></Image>
              </Menu.Item>
              <Menu.Item
                name="Supplement Index"
                as={Link}
                to="/SupplementIndex"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="By Goal"
                as={Link}
                to="/ByGoal"
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="About"
                as={Link}
                to="/OurMission"
                onClick={this.handleItemClick}
              />
            </Menu>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="SupplementIndex"
                element={<SupplementIndex />}
              ></Route>
              <Route path="ByGoal" element={<ByGoal />}></Route>
              <Route path="MeetTheTeam" element={<MeetTheTeam />}></Route>
              <Route path="OurMission" element={<OurMission />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
