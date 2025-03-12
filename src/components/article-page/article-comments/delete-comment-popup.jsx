import { useContext, useState } from "react";
import { deleteComment } from "../../../api";
import { ArticleContext } from "../../../contexts/article-context";

function DeleteCommentPopup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    setDeleteHasBeenSelected,
    commentIdToDelete,
    setCommentHasBeenDeleted,
  } = useContext(ArticleContext);

  function handleClick() {
    setIsLoading(true);
    deleteComment(commentIdToDelete)
      .then(() => {
        setDeleteHasBeenSelected(false);
        setCommentHasBeenDeleted(true);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }

  function handleClose() {
    setDeleteHasBeenSelected(false);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Are you sure you want to delete this comment?</p>
        {isError && (
          <p className="error-msg">
            Oops, something went wrong. Please try again later.
          </p>
        )}
        <span className="delete-btn">
          <button disabled={isLoading || isError} onClick={handleClick}>
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </span>
        <button disabled={isLoading} onClick={handleClose}>
          {isError ? "Close" : "Cancel"}
        </button>
      </div>
    </div>
  );
}
export default DeleteCommentPopup;
