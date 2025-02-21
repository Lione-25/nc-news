import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../api";
import Article from "./article";
import ArticleVotes from "./article-votes/article-votes";
import Comments from "./article-comments/comments";
import UnfinishedCommentPopup from "./article-comments/unfinished-comment-popup";
import { ArticleContext } from "../../contexts/article-context";
import DeleteCommentPopup from "./article-comments/delete-comment-popup";

function ArticlePage() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState([]);

  const { deleteHasBeenSelected, isUnfinishedComment } =
    useContext(ArticleContext);

  const showCommentsButton = useRef();

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then((article) => {
      setIsLoading(false);
      setArticle(article);
      setVotes(article.votes);
    });
  }, []);

  return (
    <>
      {isLoading && <h2>...Loading Article</h2>}
      {!isLoading && (
        <>
          <Article article={article} showCommentsButton={showCommentsButton} />

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
        showCommentsButton={showCommentsButton}
      />
      {isUnfinishedComment && <UnfinishedCommentPopup />}

      {deleteHasBeenSelected && <DeleteCommentPopup />}
    </>
  );
}
export default ArticlePage;
