import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-newsbeat.herokuapp.com/api"
});

export const getArticles = async topic => {
  const { data } = await request.get("/articles", {
    params: { topic }
  });

  return data.articles;
};

export const getArticleById = async article_id => {
  const { data } = await request.get(`articles/${article_id}`);
  return data.article;
};

export const getCommentsByArticleId = async article_id => {
  const { data } = await request.get(`articles/${article_id}/comments`);
  return data.comments;
};
