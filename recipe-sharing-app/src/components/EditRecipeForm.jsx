import React, { useState } from 'react';
import useRecipeStore from './store';

const EditRecipeForm = ({ recipeId, onClose }) => {
  const { recipes, updateRecipe } = useRecipeStore();
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  const [updatedRecipe, setUpdatedRecipe] = useState({
    title: recipe.title,
    description: recipe.description,
  });

  
  const handleSubmit = (e) => {
    event.preventDefault();
    updateRecipe({ id: recipeId, ...updatedRecipe });
    onClose(); // Close the form after saving
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        value={updatedRecipe.title}
        onChange={(e) =>
          setUpdatedRecipe({ ...updatedRecipe, title: e.target.value })
        }
        placeholder="Title"
      />
      <textarea
        value={updatedRecipe.description}
        onChange={(e) =>
          setUpdatedRecipe({ ...updatedRecipe, description: e.target.value })
        }
        placeholder="Description"
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
