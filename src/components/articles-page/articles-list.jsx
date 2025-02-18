import { formatDate } from "../../utils";
import { Link } from "react-router-dom";

function ArticlesList({ articlesInfo }) {
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
              <Link to={`/articles/${article.topic}`}>
                <button>{article.topic}</button>
              </Link>

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
