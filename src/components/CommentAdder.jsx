import React from "react";
import * as api from "../api";

class CommentAdder extends React.Component {
  state = {
    body: ""
  };

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.handleSumbit}>
        <label htmlFor="body">
          Comment:
          <input
            type="text"
            name="body"
            id="body"
            onChange={this.handleChange}
            value={body}
            required
          />
        </label>
        <button>Add</button>
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
    const { article_id, username } = this.props;
    api
      .postComment(article_id, { body, username })
      .then(newComment => {
        this.props.addComment(newComment);
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default CommentAdder;
