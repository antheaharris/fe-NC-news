import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  state = {
    loggedInUser: "jessjelly"
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="container">
        <Header loggedInUser={loggedInUser} />
        <Router>
          <Articles path="/" />
          <Articles path="/articles/topics/:topic" />
          <Article path="/articles/:article_id" username={loggedInUser} />
        </Router>
        <ErrorPage default />
      </div>
    );
  }
}

export default App;
