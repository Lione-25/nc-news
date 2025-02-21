import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../../../contexts/article-context";

function DeleteComment({ comment_id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteButtonIsFocused, setDeleteButtonIsFocused] = useState(false);
  const [optionsButtonIsFocused, setOptionsButtonIsFocused] = useState(false);

  const { setDeleteHasBeenSelected, setCommentIdToDelete } =
    useContext(ArticleContext);

  useEffect(() => {
    let timeout;
    if (!optionsButtonIsFocused && !deleteButtonIsFocused) {
      console.log("here");

      timeout = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
    return () => clearTimeout(timeout);
  }, [deleteButtonIsFocused, optionsButtonIsFocused]);

  return (
    <div className="dropdown-container">
      <button
        aria-label="Comment options"
        className="dots-button"
        onClick={() => {
          setIsOpen((curr) => !curr);
          setOptionsButtonIsFocused(true);
        }}
        onBlur={() => {
          setOptionsButtonIsFocused(false);
        }}
      >
        ⋮
      </button>
      {isOpen && (
        <menu className="dropdown-menu">
          <button
            onFocus={() => {
              setDeleteButtonIsFocused(true);
            }}
            onBlur={() => {
              setDeleteButtonIsFocused(false);
            }}
            onClick={() => {
              setDeleteHasBeenSelected(true);
              setCommentIdToDelete(comment_id);
            }}
          >
            Delete Comment
          </button>
        </menu>
      )}
    </div>
  );
}
export default DeleteComment;
