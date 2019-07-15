import React from "react";
import { Link } from "@reach/router";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  return (
    <li key={article.title} className={styles.articleCard}>
      <h3>{article.title}</h3>
      <Link to={`/articles/topics/${article.topic}`}>{article.topic}</Link>
      <p>{article.author}</p>
    </li>
  );
};

// const StudentCard = ({ student }) => {
//   return (
//     <Link to={`/students/${student._id}`}>
//       <li key={student._id}>
//         <span className="name">{student.name}</span>
//         <br />
//         Current block: {student.currentBlock}
//         <br />
//         Starting cohort: {student.startingCohort}
//       </li>
//       <br />
//     </Link>
//   );
// };

export default ArticleCard;
