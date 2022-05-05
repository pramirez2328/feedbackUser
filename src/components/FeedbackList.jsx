import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useState } from "react";
import ColorReverse from "./ColorReverse";

function FeedbackList({ feedback, deleteFeedback }) {
  const [toggleColor, setToggleColor] = useState(false);

  const handleReverse = () => {
    setToggleColor(!toggleColor);
  };

  if (!feedback || !feedback.length) {
    return <p>No feedback yet!</p>;
  }

  return (
    <div className="feedback-list">
      <ColorReverse onReverse={handleReverse} />
      {feedback.map((item) => {
        return (
          <FeedbackItem
            key={item.id}
            item={item}
            revColor={toggleColor}
            deleteFeedback={deleteFeedback}
          />
        );
      })}
    </div>
  );
}

export default FeedbackList;
