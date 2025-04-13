// import { formatDate, formatTimeAgo } from "../../utils";
import { Link } from "react-router-dom";
import SortOptions from "./sort-options";
import TimeAgo from "./time-ago";

function ArticlesList({
  articlesInfo,
  // isLoading,
  isError,
  setTopic,
  setQueryParams,
}) {
  const handleShare = (article) => {
    const url = `${window.location.origin}/articles/${article.article_id}`;
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          url,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };
  return (
    <div className="articles-list-container">
      {/* {isLoading && (
        <p className="loading-msg">
          Loading articles... This may take a moment if the database server was
          inactive.
        </p>
      )} */}
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
                title={article.title}
                alt={article.title}
                className="article-image"
              />
            </Link>

            <div className="article-content">
              <div className="article-header">
                <Link to={`/articles/${article.article_id}`}>
                  <h2 title={article.title} className="article-title">
                    {article.title}
                  </h2>
                </Link>
                <Link
                  className="bold-btn"
                  to={`/articles?topic=${article.topic}`}
                >
                  <button
                    className="topic-btn"
                    onClick={() => setTopic(article.topic)}
                  >
                    {article.topic}
                  </button>
                </Link>
              </div>

              <div className="article-meta">
                <p>
                  <span title={"posted by " + article.author}>
                    {article.author}{" "}
                  </span>
                  • <TimeAgo date={article.created_at} /> •{" "}
                  <span title="votes">
                    {article.votes} {article.votes === 1 ? "vote" : "votes"}
                  </span>
                </p>
                <div className="article-actions">
                  <Link
                    to={`/articles/${article.article_id}?show_comments=true&scroll_to_comments=true`}
                  >
                    <button
                      className="comment-btn"
                      // onClick={() => handleComments(article)}
                    >
                      💬 Comments
                    </button>{" "}
                  </Link>

                  <button
                    className="share-btn"
                    onClick={() => handleShare(article)}
                  >
                    ➤ Share
                  </button>

                  {/* <button className="save-btn">💾 Save</button> */}
                </div>
                {/* <p className="article-date"> 🔗
                  Posted on: {formatDate(article.created_at)}
                </p>
                <p className="article-author">By: {article.author}</p>
                <div className="1article-votes">
                  <Link to={`/articles/${article.article_id}#votes`}>
                    <p>Votes: {article.votes}</p>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
