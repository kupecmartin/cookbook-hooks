import React from "react";


export const DirectionsList = props => {
  const { directions } = props;

  const directionList = (
    <ol>
      {directions.split('\n').map((ch,index) => {
        return <li key={index} >{ch.substring(ch.length,ch.indexOf(' '))}</li>;
      })}
    </ol>
  );

  return (
    <div>
    <h3 style={{margin: "15px"}}>Postup prípravy:</h3>
    <div> {directionList}</div>
    </div>
  );

};
