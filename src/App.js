import React from "react";
import Header from "./components/Header";
const App = () => {
  const titleHeader = "this is good";
  return (
    <>
      <Header text={titleHeader} />
      <div className="container">this is my app</div>
    </>
  );
};
export default App;
