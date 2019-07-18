import React from "react";
import styles from "./CommentCard.module.css";
import * as api from "../../api";
import Voter from "../Voter/Voter";

class CommentCard extends React.Component {
  render() {
    const { body, author, comment_id, votes } = this.props.comment;
    return (
      <li className={styles.commentCard}>
        <p>{body}</p>
        <p>{author}</p>
        <Voter type={"comment"} votes={votes} id={comment_id} />
        <button onClick={() => this.deleteComment(comment_id)}>Delete</button>
      </li>
    );
  }

  deleteComment = comment_id => {
    api.deleteCommentById(comment_id);
    this.props.removeComment(comment_id);
  };
}

export default CommentCard;
