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
      console.log("posted");
      console.log(postedCommentElement);
      //postedCommentElement.current.focus(); - dsnt exist yet
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
    console.log(postedCommentElement.current, "should focus when this exists");

    // Once the (comment is posted and) ref is updated, focus element
    if (postedCommentElement.current) {
      console.log("here, is it focused?");

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
        //   && postedCommentElement.current (this dsnt exist yet.. so cant put here)
        <div className="display-flex">
          <p>Thanks, your comment has been posted!</p>
          <button
            disabled={!postedCommentElement.current} //(it's only a split second.. unless server suddenly dies in between, before loading new comments list)
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

// function handleViewPostedComment() {
//   // Ensure the comment element is in the DOM before focusing - or deal with this by disabling the button as I have done
//   if (postedCommentElement.current) {
//     postedCommentElement.current.focus();
//   }
// }
