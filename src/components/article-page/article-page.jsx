import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticle } from "../../api";
import Article from "./article";
import ArticleVotes from "./article-votes/article-votes";
import Comments from "./article-comments/comments";
import UnfinishedCommentPopup from "./article-comments/unfinished-comment-popup";
import { ArticleContext } from "../../contexts/article-context";
import DeleteCommentPopup from "./article-comments/delete-comment-popup";
import LoadingOverlay from "../loading-overlay";

function ArticlePage() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState([]);
  const [isError, setIsError] = useState(false);
  const [articleNotFound, setArticleNotFound] = useState(false);

  const { deleteHasBeenSelected, isUnfinishedComment } =
    useContext(ArticleContext);

  const showCommentsButton = useRef(null);
  const commentsSectionRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id)
      .then((article) => {
        setIsLoading(false);
        setArticle(article);
        setVotes(article.votes);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err === "Article not found") {
          setArticleNotFound(true);
        } else setIsError(true);
      });
  }, []);

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {isError && (
        <h2 className="error-msg">
          Unable to load article. Please try again later.
        </h2>
      )}
      {articleNotFound ? (
        <>
          <h1>Oops. The article you are looking for does not exist</h1>
          <h2>
            <Link to="/articles">Return to articles</Link>
          </h2>
        </>
      ) : (
        <>
          {!isLoading && (
            <>
              <Article
                article={article}
                showCommentsButton={showCommentsButton}
                commentsSectionRef={commentsSectionRef}
              />

              <ArticleVotes
                votes={votes}
                setVotes={setVotes}
                article_id={article_id}
              />
            </>
          )}
          <Comments
            article_id={article_id}
            comment_count={article.comment_count}
            commentsSectionRef={commentsSectionRef}
            showCommentsButton={showCommentsButton}
          />
        </>
      )}
      {isUnfinishedComment && <UnfinishedCommentPopup />}

      {deleteHasBeenSelected && <DeleteCommentPopup />}
    </>
  );
}
export default ArticlePage;
