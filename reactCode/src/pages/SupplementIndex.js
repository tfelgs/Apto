import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container, Header } from "semantic-ui-react";
import "../styles/SupplementIndex.css";

function SupplementIndex() {
  return (
    <Container text className="SupplementIndex">
      <div>
        <div>
          <br></br>
          <Header class="h1" className="title" size="large">
            Supplement Index
          </Header>
        </div>
        <div>
          <div className="choose">
            <Header class="h1" className="title" size="large">
              Choose a supplement
            </Header>
          </div>
          <div className="search">
            <Header class="h1" className="title" size="large">
              Search
            </Header>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SupplementIndex;
