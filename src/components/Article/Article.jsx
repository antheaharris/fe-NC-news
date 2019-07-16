import React from "react";
import * as api from "../../api";

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
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
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
