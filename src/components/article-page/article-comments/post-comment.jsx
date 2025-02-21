import { useContext, useEffect, useRef, useState } from "react";
import { postComment } from "../../../api";
import { UserAccount } from "../../../contexts/UserAccount";
import { Link, useLocation } from "react-router-dom";

function PostComment({
  article_id,
  setPostedCommentId,
  postedCommentElement,
  searchParams,
  setSearchParams,
  setIsUnfinishedComment,
  commentInputElement,
}) {
  const { savedCommentInput, setSavedCommentInput, loggedInUser } =
    useContext(UserAccount);

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
    postedCommentElement.current.focus();
    setTimeout(() => {
      postedCommentElement.current.blur();
    }, 1000);
  }

  useEffect(() => {
    if (savedCommentInput) {
      setIsUnfinishedComment(true);
    }
  }, [savedCommentInput]);

  return (
    <>
      <button
        id="add-comment-button"
        onClick={() => {
          commentInputElement.current.focus();
        }}
      >
        Add New Comment
      </button>
      <p>
        {loggedInUser
          ? `You are commenting as user ${loggedInUser}`
          : "You need to be logged in to post a comment"}
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
            setCommentInput(value);
            setIsPosted(false);
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
            : "You need to log in to post a comment"}
        </button>
      </form>

      {isLoading && <p>Please wait while we process your comment</p>}

      {isPosted && (
        <div className="display-flex">
          <p>Thanks, your comment has been posted!</p>
          <button
            disabled={!postedCommentElement.current}
            onClick={handleViewPostedComment}
          >
            View Comment
          </button>
        </div>
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
    </>
  );
}
export default PostComment;
