// Import React and Components
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
// import CSS
import "./App.css";

//Arrow Function for using UseEffect and UseState to avoid Classes
const App = () => {
  const apiKey = process.env.REACT_APP_APP_KEY;
  const apiId = process.env.REACT_APP_ID_KEY;

  //State
  const [recipes, setRecipes] = useState([]);

  // Call Api
  useEffect(() => {
    getRecipes();
  });

  // Function whitch call the Api
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${apiId}&app_key=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Rechercher
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={Math.round(recipe.recipe.calories)}
          photo={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
