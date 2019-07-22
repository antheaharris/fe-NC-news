import React from "react";
import * as api from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./Articles.module.css";
import ErrorPage from "../ErrorPage";
import Sorter from "../Sorter";

class Articles extends React.Component {
  state = {
    articles: [],
    loading: true,
    sortBy: "created_at",
    err: null
  };

  render() {
    const { articles, loading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (loading) {
      return <p>great articles take time...</p>;
    }
    return (
      <div className={styles.articles_page}>
        <Sorter changeSortBy={this.changeSortBy} />
        <ul className={styles.articles_list}>
          {articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const { topic } = this.props;

    api
      .getArticles(topic)
      .then(articles => {
        this.setState({ articles, loading: false });
      })
      .catch(err => {
        this.setState({ err, loading: false });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sortBy } = this.state;
    const { topic } = this.props;

    if (prevProps.topic !== topic || prevState.sortBy !== sortBy) {
      api.getArticles(topic, sortBy).then(articles => {
        this.setState({ articles, loading: false });
      });
    }
  };

  changeSortBy = event => {
    this.setState({ sortBy: event.target.value });
  };
}

export default Articles;
