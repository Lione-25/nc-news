import { patchArticleVotes } from "../../../api";

function VoteButton({
  article_id,
  changeLocalVotes,
  hasBeenClicked,
  setHasBeenClicked,
  otherHasBeenClicked,
  setIsError,
  isLoading,
  setIsLoading,
  voteType,
  action,
}) {
  function handleClick() {
    setIsError(false);
    setIsLoading(true);
    if (!hasBeenClicked) {
      changeLocalVotes(action);
      setHasBeenClicked(true);
      patchArticleVotes(article_id, action)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          changeLocalVotes(-action);
          setHasBeenClicked(false);
          setIsLoading(false);
        });
    } else {
      changeLocalVotes(-action);
      setHasBeenClicked(false);
      patchArticleVotes(article_id, -action)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          changeLocalVotes(action);
          setHasBeenClicked(true);
          setIsLoading(false);
        });
    }
  }
  return (
    <>
      <button disabled={isLoading || otherHasBeenClicked} onClick={handleClick}>
        {hasBeenClicked ? "Remove " : "" + voteType}
      </button>
    </>
  );
}
export default VoteButton;
