import axios from "axios";

export const getArticles = async () => {
  const { data } = await axios.get(
    "https://nc-newsbeat.herokuapp.com/api/articles"
  );
  return data.articles;
};
