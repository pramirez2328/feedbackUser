import React from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
const App = () => {
  const titleHeader = "-Feedback rating";
  return (
    <>
      <Header text={titleHeader} />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
};
export default App;
