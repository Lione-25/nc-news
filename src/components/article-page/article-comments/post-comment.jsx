import { useContext, useEffect, useRef, useState } from "react";
import { postComment } from "../../../api";
import { UserAccount } from "../../../contexts/user-account";
import { Link, useLocation } from "react-router-dom";
import { ArticleContext } from "../../../contexts/article-context";

function PostComment({
  article_id,
  postedCommentId,
  setPostedCommentId,
  postedCommentElement,
  setSearchParams,
  isLoadingCommentsList,
}) {
  const { savedCommentInput, setSavedCommentInput, loggedInUser } =
    useContext(UserAccount);

  const {
    commentInputElement,
    setIsUnfinishedComment,
    commentIdToDelete,
    commentHasBeenDeleted,
  } = useContext(ArticleContext);

  const [commentInput, setCommentInput] = useState(savedCommentInput);
  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isError, setIsError] = useState(false);

  const location = useLocation();

  function handleSubmitComment(event) {
    event.preventDefault();
    setIsPosting(true);
    postComment(article_id, loggedInUser, commentInput)
      .then(({ comment_id }) => {
        setIsPosting(false);
        setIsPosted(true);
        setPostedCommentId(comment_id);
        setCommentInput("");
        setIsUnfinishedComment(false);
        setSavedCommentInput("");
      })
      .catch(() => {
        setIsPosting(false);
        setIsError(true);
      });
  }

  function handleViewPostedComment() {
    if (postedCommentElement.current) {
      setIsPosted(false);
      postedCommentElement.current.focus();
      setTimeout(() => {
        postedCommentElement.current.blur();
      }, 1000);
    }
  }

  useEffect(() => {
    if (savedCommentInput) {
      setIsUnfinishedComment(true);
    }
    if (commentIdToDelete === postedCommentId && commentHasBeenDeleted) {
      setIsPosted(false);
    }
  }, [commentIdToDelete, commentHasBeenDeleted]);

  return (
    <>
      <p className="comment-info">
        {loggedInUser
          ? `You are commenting as ${loggedInUser}`
          : "You need to log in to post a comment"}
      </p>

      <Link
        to={{
          pathname: "/users",
          search: `?redirect_to=${encodeURIComponent(
            location.pathname + location.search
          )}`,
        }}
      >
        <button
          onClick={() => setSavedCommentInput(commentInput.trim())}
          disabled={isPosting}
        >
          {!loggedInUser ? "Log in" : "Log in as someone else"}
        </button>
      </Link>

      <form className="add-comment">
        <label htmlFor="new-comment">Share your thoughts:</label>
        <textarea
          ref={commentInputElement}
          rows="4"
          id="new-comment"
          placeholder="What a great article..."
          value={commentInput}
          required
          onChange={({ target: { value } }) => {
            setIsPosted(false);
            setCommentInput(value);
            if (!value.trim) {
              setSavedCommentInput("");
            }
            setSearchParams((currParams) => {
              const newParams = new URLSearchParams(currParams);
              newParams.set("post_comment", !!value);
              return newParams;
            });
          }}
        ></textarea>

        <button
          disabled={!commentInput.trim() || !loggedInUser || isPosting}
          onClick={handleSubmitComment}
        >
          {loggedInUser
            ? "Post Comment"
            : "You need to be logged in to post a comment"}
        </button>
      </form>

      {isPosting && (
        <p className="loading-msg">
          Please wait while we process your comment...
        </p>
      )}

      {isError && (
        <p className="error-msg">
          Unable to post comment. Please try again later.
        </p>
      )}

      {isPosted && (
        <div className="view-posted-comment">
          <p>Thanks, your comment has been posted!</p>
          <button
            disabled={isLoadingCommentsList}
            onClick={handleViewPostedComment}
          >
            View Comment
          </button>
        </div>
      )}
    </>
  );
}
export default PostComment;
