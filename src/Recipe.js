import React from "react";

const Recipe = ({ title, photo, calories, ingredients }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={photo} alt=""/>
      <p>{calories}</p>
      <ol>
          {ingredients.map(ingredient =>(
              <li>{ingredient.text}</li>
          ))}
      </ol>
    </div>
  );
};

export default Recipe;
