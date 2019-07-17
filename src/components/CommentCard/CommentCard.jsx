import React from "react";
import styles from "./CommentCard.module.css";
import * as api from "../../api";

class CommentCard extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <li className={styles.commentCard}>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <button onClick={() => this.deleteComment(comment.comment_id)}>
          Delete
        </button>
      </li>
    );
  }

  deleteComment = comment_id => {
    api.deleteCommentById(comment_id);
    this.props.removeComment(comment_id);
  };
}

export default CommentCard;
