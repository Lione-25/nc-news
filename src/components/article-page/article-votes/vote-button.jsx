import { patchArticleVotes } from "../../../api";
import VoteIcon from "./vote-icon";

function VoteButton({
  article_id,
  changeLocalVotes,
  hasBeenClicked,
  setHasBeenClicked,
  otherHasBeenClicked,
  setIsError,
  isLoading,
  setIsLoading,
  action,
}) {
  function ifNotDisabledThenRun(func, args) {
    if (!isLoading && !otherHasBeenClicked) {
      func(args);
    }
  }

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
      <VoteIcon
        isFilled={hasBeenClicked}
        onClick={() => {
          ifNotDisabledThenRun(handleClick);
        }}
        isLoading={isLoading}
        otherHasBeenClicked={otherHasBeenClicked}
        arrowDirection={action}
        ifNotDisabledThenRun={ifNotDisabledThenRun}
      />
    </>
  );
}
export default VoteButton;
