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
    <div className={styles.article_card}>
      <li>
        <section className={styles.article_title}>
          <Link to={`/articles/${article_id}`}>
            <h3>{title}</h3>
          </Link>
        </section>

        <section className={styles.article_details}>
          <p>
            written by {author} {formattedDate} ago under{" "}
            <Link to={`/articles/topics/${topic}`}>{topic}</Link>
          </p>
        </section>

        <section className={styles.comments_and_votes}>
          <p>Comments {comment_count}</p>
          <p>Votes {votes}</p>
        </section>
      </li>
    </div>
  );
};

export default ArticleCard;
