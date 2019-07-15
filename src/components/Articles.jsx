import React from "react";

class Articles extends React.Component {
  state = {
    articles: [
      {
        title: "Seafood substitutions are increasing",
        topic: "cooking",
        author: "weegembump",
        body: "Text from the article..",
        created_at: 1527695953341
      }
    ]
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return <li>{article.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Articles;
