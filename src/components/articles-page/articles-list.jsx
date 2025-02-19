import { formatDate } from "../../utils";
import { Link } from "react-router-dom";

function ArticlesList({ articlesInfo, isLoading }) {
  return (
    <>
      <div className="articles-list">
        {isLoading && <h2>...Loading Articles</h2>}
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
                <div className="display-flex">
                  <a href={`/articles/${article.article_id}#votes`}>
                    <p>votes</p>
                  </a>
                  <p> : {article.votes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ArticlesList;
