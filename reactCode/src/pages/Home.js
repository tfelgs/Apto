import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Header, Grid, Divider, Image, Segment } from "semantic-ui-react";
import "../styles/Home.css";

function Home() {
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
      <Grid.Row container stretched className="row4">
        <Grid.Column width={3}>
          <Image
            className="vitaminsFalling"
            src={require("../images/vitaminsFalling.jpg")}
          ></Image>
        </Grid.Column>
        <Grid.Column width={11}>
          <Segment basic>
            <div>
              <Header as="h3" className="title">
                Whats our goal?
              </Header>
              <Divider section className="divide" />
              Apto is designed to help everyone learn more information on what
              supplements to take for a variety of performance or health related
              goals. Many businesses are not explaining the basic effect or goal
              of these supplements, but rather sayinig it will just make you
              look like whatever influencer is marketing the product. Apto will
              allow users to become more aware of what they are taking and the
              overall effect it has on their actual performance or health.
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
              <Header as="h3">Future Features</Header>- Reliable information on
              all supplements that we can get our hands on
              <br></br>- View supplements that affect your goal!
              <br></br>- Market information will appear showing products
              currently being sold on the market that are recommended for
              specific supplements or goals<br></br>- User profiles
              <br></br>- Wishlists can be created to store supplements or goals
              that users want to go back and see
              <br></br>- User reviews to store opinions on supplements taken
              <br></br>- In-depth predictive data analysis for continous use of
              a supplement<br></br>- Features more focused towards gym media for
              sharing and messaging other users<br></br>- Creaing a custom blend
              of supplements to see overall effect or if it is on the market
              already
              <br></br>- Validating other companies' products
              <br></br>
            </div>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Home;
