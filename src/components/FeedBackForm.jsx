import React from "react";
import Card from "./shared/Card";
import { useState } from "react";

function FeedBackForm() {
  const [review, setReview] = useState("");
  const handleReview = (e) => {
    setReview(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>- How do you rate our services! -</h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleReview}
            placeholder="- Write a review..."
            value={review}
          />
          <button
            type="submit"
            style={{
              width: "7rem",
              backgroundColor: "#ff6a95",
              border: "solid 1px black",
              color: "white",
              borderRadius: "3px",
              padding: "3px",
            }}
          >
            Send
          </button>
        </div>
      </form>
    </Card>
  );
}

export default FeedBackForm;
