import React from "react";
import styles from "./CommentCard.module.css";
import * as api from "../../api";
import Voter from "../Voter/Voter";
const distanceInWords = require("date-fns/distance_in_words_to_now");

class CommentCard extends React.Component {
  render() {
    const { body, author, comment_id, votes, created_at } = this.props.comment;
    let formattedDate = distanceInWords(new Date(created_at));
    return (
      <li className={styles.commentCard}>
        <p>{body}</p>
        <p>
          posted by {author} {formattedDate} ago
        </p>
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
