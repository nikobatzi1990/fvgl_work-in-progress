import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ className, text }) {
  return (
    <button className={className} type="submit">
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

SubmitButton.defaultProps = {
  className: "",
  text: "Submit",
};

export default SubmitButton;
