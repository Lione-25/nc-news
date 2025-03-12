import { formatDate } from "../../utils";
import { Link } from "react-router-dom";
import SortOptions from "./sort-options";

function ArticlesList1({ articlesInfo, isLoading, isError, setTopic }) {
  return (
    <>
      <div className="articles-list">
        {isLoading && (
          <h2>
            Loading articles... This may take a moment if the database server
            was inactive. Hang tight!
          </h2>
        )}
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

function ArticlesList({
  articlesInfo,
  isLoading,
  isError,
  setTopic,
  setQueryParams,
}) {
  return (
    <div className="articles-list-container">
      {isLoading && (
        <p className="loading-msg">
          Loading articles... This may take a moment if the database server was
          inactive.
        </p>
      )}
      {isError && (
        <p className="error-msg">
          Unable to load articles. Please try again later.
        </p>
      )}
      <div className="sort-options-container">
        <SortOptions setQueryParams={setQueryParams} />
      </div>
      <div className="articles-list">
        {articlesInfo.map((article) => (
          <div key={article.article_id} className="article-item">
            <Link
              to={`/articles/${article.article_id}`}
              className="article-image-container"
            >
              <img
                src={article.article_img_url}
                alt={article.title}
                className="article-image"
              />
            </Link>

            <div className="article-content">
              <div className="article-header">
                <Link to={`/articles/${article.article_id}`}>
                  <h2 className="article-title">{article.title}</h2>
                </Link>
                <Link to={`/articles?topic=${article.topic}`}>
                  <button
                    className="topic-btn"
                    onClick={() => setTopic(article.topic)}
                  >
                    {article.topic}
                  </button>
                </Link>
              </div>

              <div className="article-meta">
                <p className="article-date">
                  Posted on: {formatDate(article.created_at)}
                </p>
                <p className="article-author">By: {article.author}</p>
                <div className="article-votes">
                  <Link to={`/articles/${article.article_id}#votes`}>
                    <p>Votes: {article.votes}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
