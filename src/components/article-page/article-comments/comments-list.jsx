import { useContext, useEffect, useState } from "react";
import { fetchComments } from "../../../api";
import { formatDateLong } from "../../../utils";
import { UserAccount } from "../../../contexts/user-account";
import DeleteComment from "./delete-comment";
import { ArticleContext } from "../../../contexts/article-context";

function CommentsList({ article_id, postedCommentId, postedCommentElement }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser } = useContext(UserAccount);
  const { commentHasBeenDeleted, setCommentHasBeenDeleted } =
    useContext(ArticleContext);

  useEffect(() => {
    fetchComments(article_id).then(([comments]) => {
      setComments(comments);
      setIsLoading(false);
      setCommentHasBeenDeleted(false);
    });
  }, [postedCommentId, article_id, commentHasBeenDeleted]);

  return (
    <>
      {comments.length === 0 && !isLoading && (
        <p id="no-comments-msg">Looks like there are no comments yet...</p>
      )}

      {isLoading && <p>...Loading Comments</p>}

      {comments.map((comment) => {
        return (
          <div
            ref={
              comment.comment_id === postedCommentId
                ? postedCommentElement
                : null
            }
            tabIndex={comment.comment_id === postedCommentId ? -1 : null}
            className="comment"
            key={comment.comment_id}
          >
            <div className="comment-header">
              <h3>
                {loggedInUser === comment.author ? "You" : comment.author} said:
              </h3>
              <div className="display-flex">
                <p> {formatDateLong(comment.created_at)} </p>
                {loggedInUser === comment.author && (
                  <DeleteComment comment_id={comment.comment_id} />
                )}
              </div>
            </div>

            <p>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
}
export default CommentsList;
