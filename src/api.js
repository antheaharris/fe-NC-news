import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-newsbeat.herokuapp.com/api"
});

export const getArticles = async topic => {
  const { data } = await request.get(`/articles`, {
    params: { topic }
  });

  return data.articles;
};
