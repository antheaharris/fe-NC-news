import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";
const distanceInWords = require("date-fns/distance_in_words_to_now");

const ArticleCard = ({
  article_id,
  title,
  topic,
  votes,
  comment_count,
  author,
  created_at
}) => {
  let formattedDate = distanceInWords(new Date(created_at));
  return (
    <li className={styles.articleCard}>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>
        written by {author} {formattedDate} ago
      </p>
      <Link to={`/articles/topics/${topic}`}>{topic}</Link>
      <p>Comments {comment_count}</p>
      <p>Votes {votes}</p>
    </li>
  );
};

export default ArticleCard;
