import { useSearchParams } from "react-router-dom";
import { formatDateLong } from "../../utils";
import { useEffect } from "react";

function Article({ article, showCommentsButton, commentsSectionRef }) {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("scroll_to_comments") === "true") {
      scrollToComments();
    }
  }, []);

  function scrollToComments() {
    commentsSectionRef.current.scrollIntoView();
    if (showCommentsButton.current) {
      showCommentsButton.current.focus();
    }
  }
  return (
    <>
      <div className="scroll-btn">
        <a href="#footer">
          <button>Go to End</button>
        </a>
      </div>
      <div className="article">
        <img src={article.article_img_url} alt={article.title} />
        <h1>{article.title}</h1>
        <p className="article-topic">
          Topic:{" "}
          <a href={`/articles?topic=${article.topic}`}>{article.topic}</a>
        </p>
        <div className="article-info">
          <p>
            Posted on {formatDateLong(article.created_at)} by {article.author}
          </p>
          <div className="comments-button-container bold-btn">
            <button onClick={scrollToComments}>
              {article.comment_count} comments
            </button>
          </div>
        </div>
        <p id="article-body">{article.body}</p>
      </div>
    </>
  );
}
export default Article;
