import React from 'react';
import useRecipeStore from './store';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './store'; // Import your Zustand store

const DeleteRecipeForm = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // Zustand action
  const navigate = useNavigate(); // React Router's navigation hook

  const DeleteRecipeButton = ({ recipeId }) => {
  const { deleteRecipe } = useRecipeStore();

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe from the Zustand store

    alert('Recipe deleted successfully!');

    // Navigate back to the RecipeList or another page
    navigate('/');
  };

  return (
    <div>
      <h2>Delete Recipe</h2>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>
        Delete Recipe
      </button>
    </div>
  );
};
;

 

export default DeleteRecipeButton;
