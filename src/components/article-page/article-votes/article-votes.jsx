import { useState } from "react";
import VoteButton from "./vote-button";

function ArticleVotes({ article_id, votes, setVotes }) {
  const [upHasBeenClicked, setUpHasBeenClicked] = useState(false);
  const [downHasBeenClicked, setDownHasBeenClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function changeLocalVotes(inc) {
    setVotes((votes) => {
      return Number(votes + inc);
    });
  }

  return (
    <div className="article-votes">
      <h2>Like this article? Vote below!</h2>
      <div className="vote-icons-container">
        <VoteButton
          article_id={article_id}
          changeLocalVotes={changeLocalVotes}
          hasBeenClicked={upHasBeenClicked}
          setHasBeenClicked={setUpHasBeenClicked}
          otherHasBeenClicked={downHasBeenClicked}
          setIsError={setIsError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          voteType="upvote"
          action={1}
        />
        <span className="votes-count">
          <p>{votes}</p>
        </span>
        <VoteButton
          article_id={article_id}
          changeLocalVotes={changeLocalVotes}
          hasBeenClicked={downHasBeenClicked}
          setHasBeenClicked={setDownHasBeenClicked}
          otherHasBeenClicked={upHasBeenClicked}
          setIsError={setIsError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          voteType="downvote"
          action={-1}
        />
      </div>
      <p className="add-votes">
        {upHasBeenClicked || downHasBeenClicked
          ? "Thanks! Your vote " +
            (isLoading
              ? "is being processed."
              : "has been added. Click again to remove")
          : "Click an arrow to give your rating"}
      </p>
      {isError && (
        <p className="error-msg">
          Oops, there was an error handling your vote. Please try again!
        </p>
      )}
    </div>
  );
}
export default ArticleVotes;
