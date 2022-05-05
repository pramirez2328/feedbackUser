import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/feedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const handledelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const titleHeader = "- Feedback rating";

  return (
    <>
      <Header text={titleHeader} />
      <div className="container">
        <FeedbackList feedback={feedback} deleteFeedback={handledelete} />
      </div>
    </>
  );
};
export default App;
