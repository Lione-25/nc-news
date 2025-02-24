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
      <h2>Votes</h2>
      <p className="add-votes">
        <span className="votes-count">{votes} votes. </span>
        {upHasBeenClicked || downHasBeenClicked
          ? "Thanks! Your vote " +
            (isLoading ? "is being processed." : "has been added.")
          : "Click the button to give your rating!"}
      </p>
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
      {isError && (
        <p className="error-msg">
          Oops, there was an error handling your vote. Please try again!
        </p>
      )}
    </div>
  );
}
export default ArticleVotes;
