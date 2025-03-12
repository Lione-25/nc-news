import { useState } from "react";

function VoteIcon({
  isFilled,
  onClick,
  isLoading,
  otherHasBeenClicked,
  arrowDirection,
  ifNotDisabledThenRun,
}) {
  const [outlineColour, setOutlineColour] = useState("#333");
  return (
    <svg
      //   width="3%"
      //   height="3%"
      viewBox="0 0 24 24"
      fill={
        isFilled
          ? arrowDirection === 1
            ? "#4CAF50" // Green for upvote
            : "#D9534F" // Red for downvote
          : "white"
      }
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      onMouseEnter={() =>
        ifNotDisabledThenRun(
          setOutlineColour,
          arrowDirection === 1 ? "#388E3C" : "#C9302C"
        )
      }
      onMouseLeave={() => setOutlineColour("#333")}
      style={{
        cursor: isLoading || otherHasBeenClicked ? "not-allowed" : "pointer",
        transition: "fill 0.2s ease-in-out",
        opacity: isLoading || otherHasBeenClicked ? 0.5 : 1,
      }}
    >
      <path
        d={
          arrowDirection === -1
            ? "M9 3.8C9 3.51997 9 3.37996 9.0545 3.273C9.10243 3.17892 9.17892 3.10243 9.273 3.0545C9.37996 3 9.51997 3 9.8 3H14.2C14.48 3 14.62 3 14.727 3.0545C14.8211 3.10243 14.8976 3.17892 14.9455 3.273C15 3.37996 15 3.51997 15 3.8V14H19L12 21L5 14H9V3.8Z"
            : "M9.8 21C9.51997 21 9.37996 21 9.273 20.9455C9.17892 20.8976 9.10243 20.8211 9.0545 20.727C9 20.62 9 20.48 9 20.2V10H5L12 3L19 10H15V20.2C15 20.48 15 20.62 14.9455 20.727C14.8976 20.8211 14.8211 20.8976 14.727 20.9455C14.62 21 14.48 21 14.2 21H9.8Z"
        }
        stroke={outlineColour}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default VoteIcon;
