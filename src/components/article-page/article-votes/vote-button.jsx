function VoteButton({
  article_id,
  updateArticleVotes,
  reverseArticleVotes,
  updateLocalVotes,
  reverseLocalVotes,
  hasBeenClicked,
  setHasBeenClicked,
  otherHasBeenClicked,
  setIsError,
  isLoading,
  setIsLoading,
  voteType,
}) {
  function handleClick() {
    setIsError(false);
    setIsLoading(true);
    if (!hasBeenClicked) {
      updateLocalVotes();
      setHasBeenClicked(true);
      updateArticleVotes(article_id)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          reverseLocalVotes();
          setHasBeenClicked(false);
          setIsLoading(false);
        });
    } else {
      reverseLocalVotes();
      setHasBeenClicked(false);
      reverseArticleVotes(article_id)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          updateLocalVotes();
          setHasBeenClicked(true);
          setIsLoading(false);
        });
    }
  }
  return (
    <>
      <button disabled={isLoading || otherHasBeenClicked} onClick={handleClick}>
        {hasBeenClicked ? "Remove " + voteType : voteType}
      </button>
    </>
  );
}
export default VoteButton;
