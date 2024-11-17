// RecipeList component
import { useRecipeStore } from './recipeStore';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useRecipeStore from './store';
import { link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
   

  const RecipeList = () => {
    const { filteredRecipes } = useRecipeStore();
  

};

  return (

    <div>
    <h2>Filtered Recipes</h2>
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
        </li>
      ))}
    </ul>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;