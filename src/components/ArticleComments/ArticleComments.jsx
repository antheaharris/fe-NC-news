import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import styles from "./ArticleComments.module.css";
import * as api from "../../api";
import CommentAdder from "../CommentAdder";
import ErrorPage from "../ErrorPage";

class ArticleComments extends React.Component {
  state = {
    comments: [],
    err: null
  };

  render() {
    const { comments, err } = this.state;
    if (err) return <ErrorPage err={err} />;

    return (
      <div className={styles.commentsList}>
        <h3>What is news without comments...</h3>
        <CommentAdder
          article_id={this.props.article_id}
          addComment={this.addComment}
          username={this.props.username}
        />
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                comment={comment}
                key={comment.comment_id}
                removeComment={this.removeComment}
              />
            );
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

  addComment = commentToAdd => {
    this.setState(({ comments }) => {
      return { comments: [commentToAdd, ...comments] };
    });
  };

  removeComment = comment_id => {
    this.setState(({ comments }) => {
      return {
        comments: comments.filter(comment => comment.comment_id !== comment_id)
      };
    });
  };
}

export default ArticleComments;
