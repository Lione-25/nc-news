import { useEffect, useRef, useState } from "react";
import { postComment } from "../../../api";

function PostComment({ article_id, setPostedCommentId, postedCommentElement }) {
  const [commentInput, setCommentInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);

  const commentInputElement = useRef();

  function handleSubmitComment(event) {
    event.preventDefault();
    setIsLoading(true);
    postComment(article_id, "grumpy19", commentInput).then(({ comment_id }) => {
      setIsLoading(false);
      setIsPosted(true);
      setPostedCommentId(comment_id);
    });
    setCommentInput("");
  }

  function handleViewPostedComment() {
    postedCommentElement.current.focus();
    setTimeout(() => {
      postedCommentElement.current.blur();
    }, 1000);
  }

  useEffect(() => {
    // Once the (comment is posted and) ref is updated, focus element
    if (postedCommentElement.current) {
      postedCommentElement.current.focus();
    }
  }, [postedCommentElement.current]); //why does it not notice this changing? does it only work with stateful variables or sth?

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
          }}
        ></textarea>
        <button disabled={!commentInput} onClick={handleSubmitComment}>
          Post Comment as user grumpy19
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
