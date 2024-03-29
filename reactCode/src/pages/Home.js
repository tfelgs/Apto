import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { Header, Grid, Divider, Image, Segment, List } from "semantic-ui-react";
import "../styles/Home.css";

export default class Home extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Grid stackable columns={3} className="grid">
        <Grid.Row className="row1">
          <Grid.Column textAlign="centered" className="column1">
            <div className="slogan">
              <Divider horizontal>
                Become the best without lying like the rest
              </Divider>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign="centered" className="row2">
          <Image
            className="vitaminsHand"
            src={require("../images/vitaminsHand.jpg")}
          ></Image>
        </Grid.Row>
        <Grid.Row className="row3" textAlign="centered">
          <h3 className="apto">Apto</h3>
        </Grid.Row>
        <Grid.Row centered className="row4">
          <Grid.Column only="computer" width={3}>
            <Segment basic>
              <Image
                src={require("../images/ProteinShake.jpg")}
                rounded
                centered
                width={250}
              ></Image>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment basic>
              <div>
                <Header as="h3" className="title">
                  Whats our goal?
                </Header>
                <Divider section className="divide" />
                <p>
                  Apto is designed to help everyone learn more information on
                  what supplements to take for a variety of performance or
                  health related goals. Many businesses are not explaining the
                  basic effect or goal of these supplements, but rather sayinig
                  it will just make you look like whatever influencer is
                  marketing the product. Apto will allow users to become more
                  aware of what they are taking and the overall effect it has on
                  their actual performance or health.
                </p>
              </div>
            </Segment>
            <Segment basic>
              <Divider hidden />
            </Segment>
            <Segment basic>
              <div>
                <Header as="h3" className="title">
                  What can we do currently?
                </Header>
                <Divider section className="divide" />
                <Header as="h3">Current Features</Header>
                <p>
                  - Reliable information on all supplements that we can get our
                  hands on
                  <br></br>- View supplements that affect your goal!
                </p>
                <Header as="h3">Future Features</Header>
                <p>
                  - Market information will appear showing products currently
                  being sold on the market that are recommended for specific
                  supplements or goals<br></br>- User profiles
                  <br></br>- Wishlists can be created to store supplements or
                  goals that users want to go back and see
                  <br></br>- User reviews to store opinions on supplements taken
                  <br></br>- In-depth predictive data analysis for continous use
                  of a supplement<br></br>- Features more focused towards gym
                  media for sharing and messaging other users<br></br>- Creaing
                  a custom blend of supplements to see overall effect or if it
                  is on the market already
                  <br></br>- Validating other companies' products
                  <br></br>
                </p>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="row5" textAlign="centered">
          <Grid.Column textAlign="centered">
            <List celled horizontal>
              <List.Item>About Us</List.Item>
              <List.Item>Contact</List.Item>
              <List.Item>Support</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
