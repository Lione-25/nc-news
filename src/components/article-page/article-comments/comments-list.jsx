import { useEffect, useState } from "react";
import { fetchComments } from "../../../api";
import { formatDateLong } from "../../../utils";

function CommentsList({ article_id, postedCommentId, postedCommentElement }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchComments(article_id).then(([comments]) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [postedCommentId]);

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
            tabIndex={comment.comment_id === postedCommentId ? 0 : -1}
            className="comment"
            key={comment.comment_id}
          >
            <div className="comment-header">
              <h3>{comment.author} said: </h3>
              <p> {formatDateLong(comment.created_at)}</p>
            </div>

            <p>{comment.body}</p>
          </div>
        );
      })}
    </>
  );
}
export default CommentsList;
