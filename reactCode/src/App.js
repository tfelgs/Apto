import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./pages/Header";
import NavBar from "./pages/NavBar";
import Content from "./pages/Content";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="content">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
