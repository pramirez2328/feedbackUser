import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  return (
    <>
      <div
        className="container"
        style={{ background: bgColor, color: textColor }}
      >
        <h2>{text}</h2>
      </div>
    </>
  );
}
Header.defaultProps = {
  text: "This is the header",
  bgColor: "#FF00FF",
  textColor: "FFFFFF",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
