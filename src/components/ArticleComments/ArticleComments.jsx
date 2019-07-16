import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import styles from "./ArticleComments.module.css";
import * as api from "../../api";

class ArticleComments extends React.Component {
  state = {
    comments: []
  };

  render() {
    const { comments } = this.state;
    return (
      <div className={styles.commentsList}>
        <h3>What is news without comments...</h3>
        <ul>
          {comments.map(comment => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getCommentsByArticleId(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default ArticleComments;
