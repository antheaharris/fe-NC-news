import React from "react";
import { Link } from "@reach/router";
import styles from "./Navbar.module.css";
import * as api from "../../api";
import ErrorPage from "../ErrorPage";

class Navbar extends React.Component {
  state = {
    topics: [],
    err: null
  };

  render() {
    const { topics, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <nav className={styles.flex_container}>
        <section>
          <Link to="/">Home</Link>
        </section>

        <section className={styles.topics_box}>
          <span className={styles.topic_slug}>Read about:</span>
          {topics.map(topic => {
            return (
              <Link to={`/articles/topics/${topic.slug}`}>
                <span className={styles.topic_slug}>{topic.slug}</span>
              </Link>
            );
          })}
        </section>
      </nav>
    );
  }

  componentDidMount = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default Navbar;
