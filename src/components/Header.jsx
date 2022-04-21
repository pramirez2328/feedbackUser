import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <div className="container" style={headerStyle}>
        <h2>{text}</h2>
      </div>
    </>
  );
}
Header.defaultProps = {
  text: "This is the header",
  bgColor: "#F0F8FF",
  textColor: "#DC143C",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
