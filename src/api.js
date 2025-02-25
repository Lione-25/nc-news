import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-abj5.onrender.com/api",
});

export const fetchArticles = (params) => {
  return api.get("/articles", { params }).then(({ data }) => {
    return [data.articles, data.total_count];
  });
};

export const fetchArticle = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch(
      ({
        response: {
          data: { error },
        },
      }) => {
        return Promise.reject(error);
      }
    );
};

export const patchArticleVotes = (article_id, inc) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: inc });
};

export const incrementArticleVotes = (article_id) => {
  return patchArticleVotes(article_id, 1);
};

export const decrementArticleVotes = (article_id) => {
  return patchArticleVotes(article_id, -1);
};

export const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return [data.comments, data.total_count];
  });
};

export const postComment = (article_id, username, body) => {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const fetchUsers = (params) => {
  return api.get("/users", { params }).then(({ data }) => {
    return [data.users, data.total_count];
  });
};

export const fetchTopics = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};
