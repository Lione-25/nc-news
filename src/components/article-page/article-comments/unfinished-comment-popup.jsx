function UnfinishedCommentPopup({
  commentInputElement,
  setIsUnfinishedComment,
}) {
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
        <button onClick={handleClick}>Return to comment</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
export default UnfinishedCommentPopup;
