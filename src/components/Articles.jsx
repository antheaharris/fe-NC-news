import React from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Articles extends React.Component {
  state = {
    articles: [],
    loading: true
  };

  render() {
    const { articles, loading } = this.state;
    if (loading) {
      return <p>great articles take time...</p>;
    }
    return (
      <div>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.title} className="articleCard">
                <h3>{article.title}</h3>
                <Link to={`/articles/topics/${article.topic}`}>
                  {article.topic}
                </Link>
                <p>{article.author}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getArticles()
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
