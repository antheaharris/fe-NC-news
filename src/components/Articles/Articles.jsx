import React from "react";
import * as api from "../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./Articles.module.css";
import ErrorPage from "../ErrorPage";

class Articles extends React.Component {
  state = {
    articles: [],
    loading: true,
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
        this.setState({ err });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      api.getArticles(this.props.topic).then(articles => {
        this.setState({ articles, loading: false });
      });
    }
  };
}

export default Articles;
