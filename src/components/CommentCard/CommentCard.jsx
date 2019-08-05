import React from "react";
import styles from "./CommentCard.module.css";
import * as api from "../../api";
import Voter from "../Voter/Voter";
const distanceInWords = require("date-fns/distance_in_words_to_now");

class CommentCard extends React.Component {
  render() {
    const { body, author, comment_id, votes, created_at } = this.props.comment;
    const { username } = this.props;
    let formattedDate = distanceInWords(new Date(created_at));
    return (
      <div className={styles.commentCard}>
        <li>
          <section className={styles.comment_body}>
            <p>{body}</p>
          </section>

          <section className={styles.comment_details}>
            <p>
              posted by {author} {formattedDate} ago
            </p>
          </section>
          <section className={styles.comment_delete}>
            {username === author ? (
              <button onClick={() => this.deleteComment(comment_id)}>
                Delete
              </button>
            ) : null}
          </section>

          <section className={styles.comment_vote}>
            <Voter type={"comment"} votes={votes} id={comment_id} />
          </section>
        </li>
      </div>
    );
  }

  deleteComment = comment_id => {
    api.deleteCommentById(comment_id);
    this.props.removeComment(comment_id);
  };
}

export default CommentCard;
