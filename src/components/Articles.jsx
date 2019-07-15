import React from "react";
import * as api from "../api";

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
                <p>{article.topic}</p>
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
        console.log(articles);
        this.setState({ articles, loading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };
}

export default Articles;
