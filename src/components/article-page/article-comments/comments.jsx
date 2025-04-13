import { useContext, useEffect, useRef, useState } from "react";
import PostComment from "./post-comment";
import CommentsList from "./comments-list";
import { useSearchParams } from "react-router-dom";
import { ArticleContext } from "../../../contexts/article-context";

//to fix:
// disappearing url params,
// when delete comment it loads twice afer deleting,
// issue of view posted comment when on another page of comments or list is hidden

function Comments({
  comment_count,
  article_id,
  commentsSectionRef,
  showCommentsButton,
}) {
  const [commentsListIsHidden, setCommentsListIsHidden] = useState(true);
  const [postCommentIsHidden, setPostCommentIsHidden] = useState(true);
  const [isLoadingCommentsList, setIsLoadingCommentsList] = useState(true);
  const [postedCommentId, setPostedCommentId] = useState("");

  const { commentInputElement } = useContext(ArticleContext);

  const postedCommentElement = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  function handleShowComments() {
    setCommentsListIsHidden((isHidden) => !isHidden);

    setSearchParams((currParams) => {
      const newParams = new URLSearchParams(currParams); // make a copy

      if (newParams.get("show_comments") === "true") {
        newParams.delete("show_comments");
      } else {
        newParams.set("show_comments", "true");
      }

      return newParams;
    });
  }

  function handleShowPostComment() {
    if (!postCommentIsHidden) {
      commentInputElement.current.focus(); //if postComment box is already visible, focus on it
    }
    setPostCommentIsHidden(false); //if its not visible (first time click 'add comment' btn), make it visible
  }
  useEffect(() => {
    if (!postCommentIsHidden) {
      commentInputElement.current.focus();
    }
  }, [postCommentIsHidden]); // *after* it has been made visible (for the first time), focus on it

  useEffect(() => {
    if (searchParams.get("show_comments") === "true") {
      setCommentsListIsHidden(false);
    }
    if (searchParams.has("post_comment")) {
      setPostCommentIsHidden(false);
    }
  }, []);

  return (
    <div className="comments" ref={commentsSectionRef}>
      <div className="comments-header">
        <h2 id="comments">Comments</h2>
        <button ref={showCommentsButton} onClick={handleShowComments}>
          {commentsListIsHidden ? "Show" : "Hide"} Comments
        </button>

        <button
          hidden={!postCommentIsHidden && commentsListIsHidden}
          className="add-comment-button"
          onClick={handleShowPostComment}
        >
          Add New Comment
        </button>
      </div>

      {/* <div
        hidden={!commentsListIsHidden || postCommentIsHidden}
        className="vertical-margin"
      ></div> */}

      <div hidden={commentsListIsHidden}>
        <div className="scroll-btn">
          <a href="#bottom">
            <button>Go to End</button>
          </a>
        </div>

        <CommentsList
          article_id={article_id}
          isLoading={isLoadingCommentsList}
          setIsLoading={setIsLoadingCommentsList}
          postedCommentId={postedCommentId}
          postedCommentElement={postedCommentElement}
        />
      </div>

      <div
        hidden={commentsListIsHidden || !postCommentIsHidden}
        className="vertical-margin"
      ></div>

      <h3 hidden={postCommentIsHidden} className="comment-below-msg">
        {comment_count ? "Join" : "Start"} the conversation by commenting below!
      </h3>

      <div hidden={commentsListIsHidden && postCommentIsHidden}>
        <div className="add-comment-container">
          <div hidden={commentsListIsHidden}>
            <div hidden={!postCommentIsHidden}>
              <button
                className="add-comment-button"
                onClick={handleShowPostComment}
              >
                Add New Comment
              </button>
            </div>
          </div>

          {!postCommentIsHidden && (
            <PostComment
              article_id={article_id}
              postedCommentId={postedCommentId}
              setPostedCommentId={setPostedCommentId}
              postedCommentElement={postedCommentElement}
              setSearchParams={setSearchParams}
              isLoadingCommentsList={isLoadingCommentsList}
            />
          )}
        </div>
      </div>

      <div className="scroll-btn bottom-of-pg" id="bottom">
        <a hidden={commentsListIsHidden} href="#comments">
          <button>Top of Comments</button>
        </a>
        <a href="#">
          <button>Top of Article</button>
        </a>
      </div>
    </div>
  );
}
export default Comments;
