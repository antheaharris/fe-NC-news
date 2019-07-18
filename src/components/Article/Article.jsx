import React from "react";
import * as api from "../../api";
import ArticleComments from "../ArticleComments/ArticleComments";
import styles from "./Article.module.css";
import Voter from "../Voter/Voter";

class Article extends React.Component {
  state = {
    article: {},
    loading: true
  };

  render() {
    const { title, body, votes, article_id } = this.state.article;
    const { loading } = this.state;
    if (loading) {
      return <p>great articles take time...</p>;
    }
    return (
      <div className={styles.article}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Voter type={"article"} votes={votes} id={article_id} />
        <ArticleComments
          article_id={this.props.article_id}
          username={this.props.username}
        />
      </div>
    );
  }
  componentDidMount = () => {
    api
      .getArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, loading: false });
      })
      .catch(err => {
        this.setState({ err, loading: false });
      });
  };
}

export default Article;
