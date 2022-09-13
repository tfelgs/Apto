import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Message />
      <NavBar />
    </div>
  );
}

export default App;
