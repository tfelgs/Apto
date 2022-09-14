import "semantic-ui-css/semantic.min.css";
import React from "react";
import Head from "../components/Head";
import { Container, Header } from "semantic-ui-react";

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
          <Header as='h3'>What can we do currently?</Header>
          
        </div>
    </Container>
  );
}

export default OurMission;
