import { useEffect, useRef, useState } from "react";
import PostComment from "./post-comment";
import CommentsList from "./comments-list";
import { useSearchParams } from "react-router-dom";

function Comments({
  comment_count,
  article_id,
  showCommentsButton,
  setIsUnfinishedComment,
  commentInputElement,
}) {
  const [isHidden, setIsHidden] = useState(true);
  const [postedCommentId, setPostedCommentId] = useState("");

  const postedCommentElement = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  function handleShowComments() {
    setIsHidden(false);
    setSearchParams({ show_comments: true });
  }

  useEffect(() => {
    if (searchParams.get("show_comments")) {
      setIsHidden(false);
    }
  }, []);

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
          {comment_count ? "Join" : "Start"} the conversation by commenting
          below!
        </p>
        <PostComment
          article_id={article_id}
          postedCommentId={postedCommentId}
          setPostedCommentId={setPostedCommentId}
          postedCommentElement={postedCommentElement}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setIsUnfinishedComment={setIsUnfinishedComment}
          commentInputElement={commentInputElement}
        />
      </div>
    </div>
  );
}
export default Comments;
