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
    sortBy: "",
    err: null
  };

  render() {
    const { articles, loading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (loading) {
      return <p>great articles take time...</p>;
    }
    return (
      <div>
        <Sorter changeSortBy={this.changeSortBy} />
        <ul className={styles.articlesList}>
          {articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getArticles(this.props.topic)
      .then(articles => {
        this.setState({ articles, loading: false });
      })
      .catch(err => {
        this.setState({ err, loading: false });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sortBy !== this.state.sortBy
    ) {
      api.getArticles(this.props.topic, this.state.sortBy).then(articles => {
        this.setState({ articles, loading: false });
      });
    }
  };

  changeSortBy = event => {
    this.setState({ sortBy: event.target.value });
  };
}

export default Articles;
