import { useContext, useEffect, useState } from "react";
import { fetchComments } from "../../../api";
// import { formatDateLong } from "../../../utils";
import { UserAccount } from "../../../contexts/user-account";
import DeleteComment from "./delete-comment";
import { ArticleContext } from "../../../contexts/article-context";
import Pagination from "../../articles-page/pagination";
import TimeAgo from "../../articles-page/time-ago";
// import LoadingOverlay from "../../loading-overlay";

function CommentsList({
  article_id,
  isLoading,
  setIsLoading,
  postedCommentId,
  postedCommentElement,
}) {
  const [comments, setComments] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { loggedInUser } = useContext(UserAccount);
  const { commentHasBeenDeleted, setCommentHasBeenDeleted, commentIdToDelete } =
    useContext(ArticleContext);

  const [queryParams, setQueryParams] = useState({ p: 1 });
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchComments(article_id, queryParams)
      .then(([comments, totalCount]) => {
        setComments(comments);
        setIsLoading(false);
        setCommentHasBeenDeleted(false);
        setTotalCount(totalCount);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [postedCommentId, article_id, commentHasBeenDeleted, queryParams]);

  return (
    <>
      <div className="comments-list">
        {comments.length === 0 && !isLoading && !isError && (
          <p id="no-comments-msg" className="no-comments">
            Looks like there are no comments yet...
          </p>
        )}

        {isLoading && (
          // <p className="loading-msg">
          //   ...Loading Comments <span className="inline-spinner" />
          // </p>
          <div>
            <span className="inline-spinner" />
          </div>
        )}
        {isError && (
          <p className="error-msg">
            Unable to load comments. Please try again later.
          </p>
        )}

        {comments.map((comment) => (
          <div
            hidden={
              comment.comment_id === commentIdToDelete && commentHasBeenDeleted
            }
            ref={
              comment.comment_id === postedCommentId
                ? postedCommentElement
                : null
            }
            tabIndex={comment.comment_id === postedCommentId ? -1 : null}
            className="comment-item"
            key={comment.comment_id}
          >
            <div className="comment-item-header">
              <h3 className="comment-author">
                {loggedInUser === comment.author ? "You" : comment.author} said:
              </h3>
              <div className="comment-meta">
                <p className="comment-date">
                  <TimeAgo date={comment.created_at} />
                </p>
                {loggedInUser === comment.author && (
                  <DeleteComment comment_id={comment.comment_id} />
                )}
              </div>
            </div>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </div>
      <Pagination
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        totalCount={totalCount}
        href="#comments"
      />
    </>
  );
}
export default CommentsList;
