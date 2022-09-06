import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container, Header, Grid, Divider } from "semantic-ui-react";
import "../styles/Home.css";

function Home() {
  return (
    <Grid columns={3} centered className="grid">
      <Grid.Row className="row1">
        <Grid.Column conatiner>
          <Divider horizontal className="slogan">
            Become the rest without lying like the rest
          </Divider>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="row2">
        <Grid.Column>
          <Container text>
            <Header class="h1" className="title" size="large">
              Apto
            </Header>
          </Container>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column />
      </Grid.Row>
      <Grid.Row className="row3">
        <Grid.Column width={9} className="box1">
          <Container text>
            <div>
              <Header as="h3">Whats our goal?</Header>
              <Divider section className="divide" />
              <p>
                Apto is designed to help everyone learn more information on what
                supplements to take for a variety of performance or health
                related goals. Many businesses are not explaining the basic
                effect or goal of these supplements, but rather sayinig it will
                just make you look like whatever influencer is marketing the
                product. Apto will allow users to become more aware of what they
                are taking and the overall effect it has on their actual
                performance or health.
              </p>
            </div>
          </Container>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="row4">
        <Grid.Column width={9} className="box2">
          <Container text>
            <div>
              <Header as="h3">What can we do currently?</Header>
              <Divider section className="divide" />
              <Container as="h3" textAlign="left">
                Current Features
              </Container>
              <Container as="h3" textAlign="left">
                Future Features
              </Container>
              <p>
                - Reliable information on all supplements that we can get our
                hands on<br></br>- View supplements that affect your goal!
                <br></br>- Market information will appear showing products
                currently being sold on the market that are recommended for
                specific supplements or goals<br></br>- User profiles<br></br>-
                Wishlists can be created to store supplements or goals that
                users want to go back and see
                <br></br>- User reviews to store opinions on supplements taken
                <br></br>- In-depth predictive data analysis for continous use
                of a supplement<br></br>- Features more focused towards gym
                media for sharing and messaging other users<br></br>- Creaing a
                custom blend of supplements to see overall effect or if it is on
                the market already
                <br></br>- Validating other companies' products
                <br></br>
              </p>
            </div>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
