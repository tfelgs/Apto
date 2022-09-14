import "semantic-ui-css/semantic.min.css";
import React from "react";
import Head from "../components/Head";
import "../logo.png";
import { Container, Header, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const hStyle = { color: 'red' };
const element = <h1 style={ hStyle }>Developer</h1>
function OurMission() {
  return (
    <Container text>
      <div>
          <Head />
        </div>
      <Header class="h1" className="title" size="large">
        Our Mission
      </Header>
      <div>
          <p>
            Our mission with Apto is to design an application to help everyone learn more information on what
            supplements to take for a variety of performance or health related
            goals. Many businesses are not explaining the basic effect or goal
            of these supplements, but rather sayinig it will just make you look
            like whatever influencer is marketing the product. Apto will allow
            users to become more aware of what they are taking and the overall
            effect it has on their actual performance or health.
          </p>
          <Header className = 'title' class ='h1' size = 'large'>
            Meet The Team!
          </Header>
          <Header className = 'title' class = 'h3'>
            Tyler Felgenhauer - <span className='green'> Founder</span> and <span className = 'red'> Developer</span>
          </Header>
          <p>
            Tyler is a college student going to Iowa State University. He has a hobby of working out at the gym.
            And he noticed that when trying to find the perfect supplement for his workout he noticed 
            how much of a struggle that really is. So he took the matters into his own hands and started to create
            an application that you can use to find the perfect supplement for you.
          </p>
          <Header className = 'title' class = 'h3'>
            Dylan Felgenhauer - <span className = 'red'> Developer</span>
          </Header>
          <p>
            Dylan is the twin brother of Tyler Felgenhauer and a college student that goes to Illinois 
            Institute of Technology. He is currently studying Computer Science and is a bartender.
          </p>
          <Image
                  as={Link}
                  src={require("../MeetTeam.png")}
                  to="/Home"
          ></Image>
        </div>
    </Container>
  );
}

export default OurMission;
