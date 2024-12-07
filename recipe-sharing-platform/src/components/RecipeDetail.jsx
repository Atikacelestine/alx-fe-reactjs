import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error fetching recipe details:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20">Loading recipe details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold text-blue-800 mt-6">{recipe.title}</h1>
      <p className="text-gray-600 mt-4">{recipe.summary}</p>

      {/* Ingredients Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      {/* Cooking Instructions Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cooking Instructions</h2>
        <ol className="list-decimal pl-5 text-gray-600">
          <li>Step 1: Preheat the oven to 350°F.</li>
          <li>Step 2: Prepare the ingredients.</li>
          <li>Step 3: Combine and cook as instructed.</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
