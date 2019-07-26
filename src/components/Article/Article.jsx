import React from "react";
import * as api from "../../api";
import ArticleComments from "../ArticleComments/ArticleComments";
import styles from "./Article.module.css";
import Voter from "../Voter/Voter";
import ErrorPage from "../ErrorPage";

class Article extends React.Component {
  state = {
    article: {},
    loading: true,
    err: null
  };

  render() {
    const { title, body, votes, article_id } = this.state.article;
    const { loading, err } = this.state;
    if (err) return <ErrorPage err={err} />;

    if (loading) {
      return <p>great articles take time...</p>;
    }
    return (
      <section className={styles.article_page}>
        <section className={styles.article}>
          <h2>{title}</h2>
          <p>{body}</p>
        </section>

        <section className={styles.article_votes}>
          <Voter type={"article"} votes={votes} id={article_id} />
        </section>

        <ArticleComments
          article_id={this.props.article_id}
          username={this.props.username}
        />
      </section>
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
