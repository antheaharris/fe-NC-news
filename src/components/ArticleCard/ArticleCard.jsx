import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";
import Voter from "../Voter/Voter";

const ArticleCard = ({ article_id, title, topic, votes, comment_count }) => {
  return (
    <li className={styles.articleCard}>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>{" "}
      </Link>
      <Link to={`/articles/topics/${topic}`}>{topic}</Link>
      <p>Comments {comment_count}</p>
      <Voter type={"article"} votes={votes} id={article_id} />
    </li>
  );
};

export default ArticleCard;
