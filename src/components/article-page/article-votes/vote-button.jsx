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
      //updateLocalVotes();
      changeLocalVotes(action);
      setHasBeenClicked(true);
      patchArticleVotes(article_id, action)
        //updateArticleVotes(article_id)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          changeLocalVotes(-action);
          // reverseLocalVotes();
          setHasBeenClicked(false);
          setIsLoading(false);
        });
    } else {
      //reverseLocalVotes();
      changeLocalVotes(-action);
      setHasBeenClicked(false);
      patchArticleVotes(article_id, -action)
        //reverseArticleVotes(article_id)
        .then(() => {
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          //updateLocalVotes();
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
