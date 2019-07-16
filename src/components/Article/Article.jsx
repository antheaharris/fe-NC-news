import React from "react";
import * as api from "../../api";
import ArticleComments from "../ArticleComments/ArticleComments";
import styles from "./Article.module.css";

class Article extends React.Component {
  state = {
    article: {},
    loading: true
  };

  render() {
    const { title, body } = this.state.article;
    const { loading } = this.state;
    if (loading) {
      return <p>great articles take time...</p>;
    }
    return (
      <div className={styles.article}>
        <h2>{title}</h2>
        <p>{body}</p>
        <ArticleComments article_id={this.props.article_id} />
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
        this.setState({ err });
      });
  };
}

export default Article;
