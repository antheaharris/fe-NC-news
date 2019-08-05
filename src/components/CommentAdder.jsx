import React from "react";
import * as api from "../api";
import ErrorPage from "../components/ErrorPage";
import styles from "./ArticleComments/ArticleComments.module.css";

class CommentAdder extends React.Component {
  state = {
    body: "",
    err: null
  };

  render() {
    const { body, err } = this.state;
    if (err) return <ErrorPage err={err} />;

    return (
      <form onSubmit={this.handleSumbit}>
        <label htmlFor="body">
          Post a comment: &nbsp;
          <input
            type="text"
            name="body"
            id="body"
            onChange={this.handleChange}
            value={body}
            required
          />
        </label>

        <button>comment</button>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSumbit = event => {
    event.preventDefault();

    const { body } = this.state;
    const { article_id, username, addComment } = this.props;
    api
      .postComment(article_id, { body, username })
      .then(newComment => {
        addComment(newComment);
        this.setState({ body: "" });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default CommentAdder;
