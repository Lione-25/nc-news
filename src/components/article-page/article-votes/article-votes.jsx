import { useState } from "react";
import VoteButton from "./vote-button";
import { decrementArticleVotes, incrementArticleVotes } from "../../../api";

function ArticleVotes({ article_id, votes, setVotes }) {
  const [upHasBeenClicked, setUpHasBeenClicked] = useState(false);
  const [downHasBeenClicked, setDownHasBeenClicked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function changeLocalVotes(inc) {
    setVotes((votes) => {
      return votes + inc;
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
        updateArticleVotes={incrementArticleVotes}
        reverseArticleVotes={decrementArticleVotes}
        updateLocalVotes={() => {
          changeLocalVotes(1);
        }}
        reverseLocalVotes={() => {
          changeLocalVotes(-1);
        }}
        hasBeenClicked={upHasBeenClicked}
        setHasBeenClicked={setUpHasBeenClicked}
        otherHasBeenClicked={downHasBeenClicked}
        setIsError={setIsError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        voteType="upvote"
      />
      <VoteButton
        article_id={article_id}
        updateArticleVotes={decrementArticleVotes}
        reverseArticleVotes={incrementArticleVotes}
        updateLocalVotes={() => {
          changeLocalVotes(-1);
        }}
        reverseLocalVotes={() => {
          changeLocalVotes(1);
        }}
        hasBeenClicked={downHasBeenClicked}
        setHasBeenClicked={setDownHasBeenClicked}
        otherHasBeenClicked={upHasBeenClicked}
        setIsError={setIsError}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        voteType="downvote"
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
