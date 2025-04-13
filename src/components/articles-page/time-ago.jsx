import { useEffect, useState } from "react";
import { formatTimeAgo } from "../../utils";

function TimeAgo({ date }) {
  const [timeAgo, setTimeAgo] = useState(formatTimeAgo(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(formatTimeAgo(date));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [date]);

  return (
    <span
      title={new Date(date).toLocaleString("en-gb", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    >
      {timeAgo}
    </span>
  );
}

export default TimeAgo;
