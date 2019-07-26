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
    if (loading) {
      return <p>great articles take time...</p>;
    }
    if (err) return <ErrorPage err={err} />;
    return (
      <div className={styles.articles_container}>
        <section className={styles.sorter}>
          <Sorter changeSortBy={this.changeSortBy} />
        </section>

        <section className={styles.articles_list}>
          <ul>
            {articles.map(article => {
              return <ArticleCard {...article} key={article.article_id} />;
            })}
          </ul>
        </section>
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
