import React from "react";

const Recipe = ({ title, photo, calories }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={photo} alt=""/>
      <p>{calories}</p>
    </div>
  );
};

export default Recipe;
