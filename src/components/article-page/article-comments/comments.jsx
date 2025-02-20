import { useRef, useState } from "react";
import PostComment from "./post-comment";
import CommentsList from "./comments-list";

function Comments({ comment_count, article_id, showCommentsButton }) {
  const [isHidden, setIsHidden] = useState(true);
  const [postedCommentId, setPostedCommentId] = useState("");

  const postedCommentElement = useRef();

  function handleShowComments() {
    setIsHidden(false);
  }
  return (
    <div className="comments">
      <div className="display-flex">
        <h2 id="comments">Comments</h2>
        <div>
          <button
            ref={showCommentsButton}
            onClick={handleShowComments}
            disabled={!isHidden}
          >
            Show Comments
          </button>
        </div>
      </div>
      <div hidden={isHidden}>
        <CommentsList
          article_id={article_id}
          postedCommentId={postedCommentId}
          postedCommentElement={postedCommentElement}
        />
        <p>
          {comment_count === 0 ? "Start" : "Join"} the conversation by
          commenting below!
        </p>
        <PostComment
          article_id={article_id}
          postedCommentId={postedCommentId}
          setPostedCommentId={setPostedCommentId}
          postedCommentElement={postedCommentElement}
        />
      </div>
    </div>
  );
}
export default Comments;
