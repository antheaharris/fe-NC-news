import React from "react";

const Sorter = ({ changeSortBy }) => {
  return (
    <label>
      {" "}
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
