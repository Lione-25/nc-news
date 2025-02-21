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
  const [isLoading, setIsLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const location = useLocation();

  function handleSubmitComment(event) {
    event.preventDefault();
    setIsLoading(true);
    postComment(article_id, loggedInUser, commentInput).then(
      ({ comment_id }) => {
        setIsLoading(false);
        setIsPosted(true);
        setPostedCommentId(comment_id);
      }
    );
    setCommentInput("");
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
  }, [savedCommentInput, commentIdToDelete, commentHasBeenDeleted]);

  return (
    <>
      <p>
        {loggedInUser
          ? `You are commenting as user ${loggedInUser}`
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
          onClick={() => {
            setSavedCommentInput(commentInput.trim());
          }}
          disabled={isLoading}
        >
          {!loggedInUser ? "Log in" : "Log in as someone else"}
        </button>
      </Link>
      <form className="add-comment">
        <label htmlFor="new-comment">Share your thoughts: </label>
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
            if (value) {
              setSearchParams({ show_comments: true, post_comment: true });
            }
            if (!value) {
              setSearchParams({ show_comments: true });
            }
          }}
        ></textarea>
        <button
          disabled={!commentInput.trim() || !loggedInUser || isLoading}
          onClick={handleSubmitComment}
        >
          {loggedInUser
            ? "Post Comment"
            : "You need to be logged in to post a comment"}
        </button>
      </form>

      {isLoading && <p>Please wait while we process your comment</p>}

      {isPosted && (
        <div className="display-flex">
          <p>Thanks, your comment has been posted!</p>
          <button
            //disabled={!postedCommentElement.current}
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
