import { useEffect, useState } from "react";
import { fetchArticles } from "../../api";
import { formatDate } from "../../utils";
import { Link, useNavigate } from "react-router-dom";

function ArticlesList() {
  const [articlesInfo, setArticlesInfo] = useState([]);

  useEffect(() => {
    fetchArticles().then((articlesInfo) => {
      setArticlesInfo(articlesInfo);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="articles-list">
        {articlesInfo.map((article) => {
          return (
            <div key={article.article_id} className="article-item">
              <Link
                to={`/articles/${article.article_id}`}
                className="article-item-img-title"
              >
                <img src={article.article_img_url} alt={article.title} />
                <h2>{article.title}</h2>
              </Link>
              <button
                onClick={() => {
                  navigate(`articles/${article.topic}`);
                }}
              >
                {article.topic}
              </button>

              <div id="article-item-info">
                <p>posted on: {formatDate(article.created_at)}</p>
                <p>author: {article.author} </p>
                <p>votes: {article.votes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ArticlesList;
