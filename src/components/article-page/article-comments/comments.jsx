import { useContext, useEffect, useRef, useState } from "react";
import PostComment from "./post-comment";
import CommentsList from "./comments-list";
import { useSearchParams } from "react-router-dom";
import { ArticleContext } from "../../../contexts/article-context";

function Comments({ comment_count, article_id, showCommentsButton }) {
  const [isHidden, setIsHidden] = useState(true);
  const [postCommentIsHidden, setPostCommentIsHidden] = useState(true);
  const [postedCommentId, setPostedCommentId] = useState("");

  const { commentInputElement } = useContext(ArticleContext);

  const postedCommentElement = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  function handleShowComments() {
    setIsHidden(false);
    setSearchParams({ show_comments: true });
  }

  function handleShowPostComment() {
    setPostCommentIsHidden(false);
    if (!postCommentIsHidden) {
      commentInputElement.current.focus();
    }
  }

  useEffect(() => {
    if (searchParams.get("show_comments")) {
      setIsHidden(false);
    }
    if (searchParams.get("post_comment")) {
      setPostCommentIsHidden(false);
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
        <button id="add-comment-button" onClick={handleShowPostComment}>
          Add New Comment
        </button>
        {!postCommentIsHidden && (
          <PostComment
            article_id={article_id}
            postedCommentId={postedCommentId}
            setPostedCommentId={setPostedCommentId}
            postedCommentElement={postedCommentElement}
            setSearchParams={setSearchParams}
          />
        )}
        <a href="#comments">
          <button
            onClick={() => {
              console.log("clicked");
            }}
          >
            Top of Comments
          </button>
        </a>
        <a href="#">
          <button
            onClick={() => {
              console.log("clicked");
            }}
          >
            Back to Article
          </button>
        </a>
      </div>
    </div>
  );
}
export default Comments;
