import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ article_id, title, topic }) => {
  return (
    <li className={styles.articleCard}>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>{" "}
      </Link>
      <Link to={`/articles/topics/${topic}`}>{topic}</Link>
    </li>
  );
};

export default ArticleCard;
