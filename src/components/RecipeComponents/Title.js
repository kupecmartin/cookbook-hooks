import React from "react";
import PropTypes from "prop-types";

export const Title = (props) => {
  const {title} = props;
  return (
    <div>{title}</div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}
