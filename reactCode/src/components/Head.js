import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container, Header } from "semantic-ui-react";

function Head() {
  return (
    <Container text>
      <br></br>
      <div>
        <Header class="h1" className="title" size="large">
          Apto
        </Header>
        <Header class="h2" className="slogan" size="small">
          Become the best without lying like the rest
        </Header>
      </div>
    </Container>
  );
}

export default Head;
