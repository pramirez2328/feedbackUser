import React from "react";

function Card({ children, revColor }) {
  const changeColor = revColor
    ? { background: "#000000", color: "#ffffff" }
    : {};
  return (
    <div className="card" style={changeColor}>
      {children}
    </div>
  );
}

export default Card;
