import React from "react";
import PropTypes from "prop-types";

export const SideDish = (props) => {
  const {sideDish} = props;
  return (
    <span>{sideDish}</span>
  );
}

SideDish.propTypes = {
  title: PropTypes.string
}
