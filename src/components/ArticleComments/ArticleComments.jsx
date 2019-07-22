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
    const { username, article_id } = this.props;
    if (err) return <ErrorPage err={err} />;

    return (
      <div className={styles.commentsList}>
        <h3>Comments...</h3>
        <CommentAdder
          article_id={article_id}
          addComment={this.addComment}
          username={username}
        />
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                comment={comment}
                key={comment.comment_id}
                removeComment={this.removeComment}
                username={username}
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
