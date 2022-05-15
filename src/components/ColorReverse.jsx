import React from "react";

function ColorReverse({ onReverse }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={onReverse}
        style={{
          padding: "0.3rem",
          cursor: "pointer",
          color: "white",
          backgroundColor: "black",
          border: "1px white solid",
          borderRadius: "5px",
          width: "50%",
          fontFamily: "cursive",
          fontWeight: "900",
          letterSpacing: "0.5rem",
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
}

export default ColorReverse;
