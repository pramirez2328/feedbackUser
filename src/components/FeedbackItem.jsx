import React from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, revColor, deleteFeedback }) {
  return (
    <Card revColor={revColor}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
