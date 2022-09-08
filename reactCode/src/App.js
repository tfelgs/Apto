import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <div>
        <Message />
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
