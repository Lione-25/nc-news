import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-abj5.onrender.com/api",
});

export const fetchArticles = (params) => {
  return api.get("/articles", { params }).then((res) => {
    return res.data.articles;
  });
};
