import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || !feedback.length) {
    return <p>No feed back yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FeedbackList;
