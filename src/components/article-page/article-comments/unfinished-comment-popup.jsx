import { useContext } from "react";
import { ArticleContext } from "../../../contexts/article-context";

function UnfinishedCommentPopup() {
  const { commentInputElement, setIsUnfinishedComment } =
    useContext(ArticleContext);

  function handleClick() {
    commentInputElement.current.focus();
    handleClose();
  }

  function handleClose() {
    setIsUnfinishedComment(false);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>You have an unfinished comment</p>
        <span className="return-to-comment-btn">
          <button onClick={handleClick}>Return to comment</button>
        </span>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
export default UnfinishedCommentPopup;
