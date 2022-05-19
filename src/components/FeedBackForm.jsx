import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedBackForm;
