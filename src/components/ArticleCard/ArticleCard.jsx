import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";
import Voter from "../Voter/Voter";

const ArticleCard = ({ article_id, title, topic, votes }) => {
  return (
    <li className={styles.articleCard}>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>{" "}
      </Link>
      <Link to={`/articles/topics/${topic}`}>{topic}</Link>
      <Voter votes={votes} id={article_id} />
    </li>
  );
};

export default ArticleCard;
