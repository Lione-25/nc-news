import { useContext, useState } from "react";
import { deleteComment } from "../../../api";
import { ArticleContext } from "../../../contexts/article-context";

function DeleteCommentPopup() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    setDeleteHasBeenSelected,
    commentIdToDelete,
    setCommentHasBeenDeleted,
  } = useContext(ArticleContext);

  function handleClick() {
    setIsLoading(true);
    deleteComment(commentIdToDelete).then(() => {
      setDeleteHasBeenSelected(false);
      setCommentHasBeenDeleted(true);
    });
  }

  function handleClose() {
    setDeleteHasBeenSelected(false);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Are you sure you want to delete this comment?</p>
        <button disabled={isLoading} onClick={handleClick}>
          {isLoading ? "Deleting..." : "Delete"}
        </button>
        <button disabled={isLoading} onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default DeleteCommentPopup;
