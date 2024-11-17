import React from "react";
import { useRecipeStore } from '../store'
const RecommendationsList =()=> {
    const {recipes, favorites} =
    useRecipeStore();

    //Filter out favorite recipes

    const recommendations =recipes.filter((recipe) => ! favorites.includes(ecipe.id));

    return (
        <div>
            <h2>Recommendation</h2>

{ recommendations.map((recipe)=> (
<div key = { recipe.id }>
    <h3>{recipe.title}</h3>
    <p>{recipe.description}</p>
</div>

))}
        </div>
);
};

export default RecommendationsList;