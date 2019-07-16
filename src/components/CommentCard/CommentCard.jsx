import React from "react";
import styles from "./CommentCard.module.css";

const CommentCard = ({ comment }) => {
  return (
    <li className={styles.commentCard}>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
    </li>
  );
};

export default CommentCard;
