import { formatDateLong } from "../../utils";

function Article({ article, showCommentsButton }) {
  function scrollToComments() {
    if (!showCommentsButton.current.disabled) {
      showCommentsButton.current.focus();
    }
    showCommentsButton.current.scrollIntoView();
  }
  return (
    <div className="article">
      <div className="pagination">
        <a href="#footer">
          <button>Go to End</button>
        </a>
      </div>
      <img src={article.article_img_url} alt={article.title} />
      <h1>{article.title}</h1>
      <p className="article-topic">
        Topic: <a href={`/articles?topic=${article.topic}`}>{article.topic}</a>
      </p>
      <div className="article-info">
        <p>
          Posted on {formatDateLong(article.created_at)} by {article.author}
        </p>
        <button onClick={scrollToComments}>
          {article.comment_count} comments
        </button>
      </div>
      <p id="article-body">{article.body}</p>
    </div>
  );
}
export default Article;
