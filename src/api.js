import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-newsbeat.herokuapp.com/api"
});

export const getArticles = async (topic, sort_by) => {
  const { data } = await request.get("/articles", {
    params: { topic, sort_by }
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

export const postComment = async (article_id, newComment) => {
  const { data } = await request.post(
    `articles/${article_id}/comments`,
    newComment
  );
  return data.comment;
};

export const deleteCommentById = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

export const vote = async (type, id, inc_votes) => {
  const { data } = await request.patch(`/${type}s/${id}`, { inc_votes });
  return data;
};
