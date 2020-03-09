import React from "react";
import PropTypes from "prop-types";

export const TimeConversion = (props) => {
  const {time} = props;
  const hourTime = convertPreparationTime(time);

  function convertPreparationTime(num) {
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);

    if (rhours === 0 && rminutes === 0) {
      return "missing time";
    }
    if (rhours !== 0 && rminutes === 0) {
      return rhours + " hod";
    }
    if (rhours === 0 && rminutes !== 0) {
      return rminutes + " min";
    }
    if (rhours !== 0 && rminutes !== 0) {
      return rhours + " hod " + rminutes + " min";
    }
  }

  return (
    <span>
      <i className="fa fa-clock-o"/>
      <span className="recipe-text">Čas prípravy: {hourTime}</span>
    </span>
  );
}

TimeConversion.propTypes = {
  "time": PropTypes.number.isRequired,
};


