import React from "react";
import Card from "./shared/Card";

function FeedbackItem({ item, revColor }) {
  return (
    <Card revColor={revColor}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
