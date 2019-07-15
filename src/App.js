import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Articles from "./components/Articles";

class App extends React.Component {
  state = {
    loggedInUser: "jessjelly"
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Articles path="/articles" />
          <Articles path="/articles/topics/:topic" />
        </Router>
      </div>
    );
  }
}

export default App;
