import { useState } from "react";
import { decrementArticleVotes, incrementArticleVotes } from "../../api";

function ArticleVotes({ article_id, votes, setVotes }) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  function incrementLocalVotes(inc) {
    setVotes((votes) => {
      return votes + inc;
    });
  }
  function handleClick() {
    setIsError(false);
    if (!hasBeenClicked) {
      incrementLocalVotes(1);
      setHasBeenClicked(true);
      incrementArticleVotes(article_id).catch(() => {
        setIsError(true);
        incrementLocalVotes(-1);
        setHasBeenClicked(false);
      });
    } else {
      incrementLocalVotes(-1);
      setHasBeenClicked(false);
      decrementArticleVotes(article_id).catch(() => {
        setIsError(true);
        incrementLocalVotes(1);
        setHasBeenClicked(true);
      });
    }
  }
  return (
    <div className="article-votes">
      <h2>Votes</h2>
      <p className="add-votes">
        <span className="votes-count">{votes} votes. </span>
        {hasBeenClicked
          ? "Thanks! Your vote has been added."
          : "Click the button to add your vote!"}
      </p>
      <button onClick={handleClick}>
        {hasBeenClicked ? "Remove Vote" : "Add Vote"}
      </button>
      {isError && (
        <p className="error-msg">
          Oops, there was an error handling your vote. Please try again!
        </p>
      )}
    </div>
  );
}
export default ArticleVotes;
