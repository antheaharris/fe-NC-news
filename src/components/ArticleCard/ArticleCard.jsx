import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li key={article.article_id} className={styles.articleCard}>
        <h3>{article.title}</h3>
        <Link to={`/articles/topics/${article.topic}`}>{article.topic}</Link>
        <p>{article.author}</p>
      </li>
    </Link>
  );
};

export default ArticleCard;
