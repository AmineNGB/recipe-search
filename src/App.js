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
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // Call Api
  useEffect(() => {
    getRecipes();
  }, [query]);

  // Function whitch call the Api
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  };

  //change State with the Query input
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // On submit, the app call the api only on submit !
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="container">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Rechercher
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            photo={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
