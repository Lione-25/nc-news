import { formatDate } from "../../utils";
import { Link } from "react-router-dom";

function ArticlesList({ articlesInfo, isLoading, isError, setTopic }) {
  return (
    <>
      <div className="articles-list">
        {isLoading && <h2>...Loading Articles</h2>}
        {isError && (
          <h2 className="error-msg">
            Unable to load articles. Please try again later.
          </h2>
        )}
        {articlesInfo.map((article) => {
          return (
            <div key={article.article_id} className="article-item">
              <Link to={`/articles/${article.article_id}`}>
                <img src={article.article_img_url} alt={article.title} />
              </Link>

              <div>
                <div className="display-flex">
                  <Link
                    to={`/articles/${article.article_id}`}
                    className="title-container"
                  >
                    <h2>{article.title}</h2>
                  </Link>

                  <Link to={`/articles?topic=${article.topic}`}>
                    <button
                      className="topic-btn"
                      onClick={() => {
                        setTopic(article.topic);
                      }}
                    >
                      {article.topic}
                    </button>
                  </Link>
                </div>

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
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ArticlesList;
