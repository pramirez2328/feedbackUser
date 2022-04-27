import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./data/feedbackData";
const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);
  const titleHeader = "-Feedback rating";
  return (
    <>
      <Header text={titleHeader} />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};
export default App;
