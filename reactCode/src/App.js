import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
