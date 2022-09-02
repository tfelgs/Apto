import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container, Header } from "semantic-ui-react";
import Head from "../components/Head";
import "../styles/Home.css";

function Home() {
  return (
    <Container text className="home">
      <div>
        <div>
          <Head />
        </div>
        <div>
          <Header class="h2" size="small">
            <br></br>
            Whats our goal?
          </Header>
          <p>
            Apto is designed to help everyone learn more information on what
            supplements to take for a variety of performance or health related
            goals. Many businesses are not explaining the basic effect or goal
            of these supplements, but rather sayinig it will just make you look
            like whatever influencer is marketing the product. Apto will allow
            users to become more aware of what they are taking and the overall
            effect it has on their actual performance or health.
          </p>
          <Header class="h2" size="small">
            What can we do currently?
          </Header>
          <p>
            <h3>Current Features</h3>
            <h3>Future Features</h3>- Reliable information on all supplements
            that we can get our hands on<br></br>- View supplements that affect
            your goal!<br></br>- Market information will appear showing products
            currently being sold on the market that are recommended for specific
            supplements or goals<br></br>- User profiles<br></br>- Wishlists can
            be created to store supplements or goals that users want to go back
            and see
            <br></br>- User reviews to store opinions on supplements taken
            <br></br>- In-depth predictive data analysis for continous use of a
            supplement<br></br>- Features more focused towards gym media for
            sharing and messaging other users<br></br>- Creaing a custom blend
            of supplements to see overall effect or if it is on the market
            already
            <br></br>- Validating other companies' products
            <br></br>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
