import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-abj5.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then((res) => {
    return res.data.articles;
  });
};
