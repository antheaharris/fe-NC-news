import React from "react";
import styles from "./Articles/Articles.module.css";

const Sorter = ({ changeSortBy }) => {
  return (
    <label className={styles.filter}>
      Filter by:
      <select onChange={changeSortBy}>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment count</option>
      </select>
    </label>
  );
};

export default Sorter;
