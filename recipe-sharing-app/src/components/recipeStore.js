import create from 'zustand'

  const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    favorites: [],
    recommendations:[],
    filterByIngredients: '',
    filterByTime: '',
    filteredRecipes: [],
    
    // Add a recipe
    addRecipe: (newRecipe) =>
      set((state) => ({
        recipes: [...state.recipes, newRecipe],
        filteredRecipes: [...state.recipes, newRecipe].filter((recipe) =>
          recipe.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase()) &&
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(state.filterByIngredients.toLowerCase())
          ) &&
          (state.filterByTime
            ? recipe.cookingTime <= parseInt(state.filterByTime, 10)
            : true)
        ),
      })),
    
    // Action to set the entire recipes array (e.g., fetched from an API)
  setRecipes: (newRecipes) =>
    set(() => ({
      recipes: newRecipes,
    })),

    // Action to update an existing recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Action to delete a recipe by ID
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
    
    // Update search term
    setSearchTerm: (term) =>
      set((state) => ({
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(term.toLowerCase()) &&
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(state.filterByIngredients.toLowerCase())
          ) &&
          (state.filterByTime
            ? recipe.cookingTime <= parseInt(state.filterByTime, 10)
            : true)
        ),
      })),
  
    // Update ingredient filter
    setFilterByIngredients: (ingredient) =>
      set((state) => ({
        filterByIngredients: ingredient,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(ingredient.toLowerCase())
          ) &&
          (state.filterByTime
            ? recipe.cookingTime <= parseInt(state.filterByTime, 10)
            : true)
        ),
      })),
  
    // Update cooking time filter
    setFilterByTime: (time) =>
      set((state) => ({
        filterByTime: time,
        filteredRecipes: state.recipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(state.filterByIngredients.toLowerCase())
          ) &&
          (time ? recipe.cookingTime <= parseInt(time, 10) : true)

           // Add to favorites
  addToFavorites: (recipeId) =>
    set((state) => {
      const recipe = state.recipes.find((r) => r.id === recipeId);
      if (recipe && !state.favorites.some((fav) => fav.id === recipeId)) {
        return {
          favorites: [...state.favorites, recipe],
        };
      }
      return {};
    }),

  // Remove from favorites
  removeFromFavorites: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== recipeId),
    })),

  // Generate recommendations
  generateRecommendations: () =>set((state) => {
      if (state.favorites.length > 0) {
        const favoriteIngredients = state.favorites
          .flatMap((fav) => fav.ingredients)
          .reduce((acc, ing) => {
            acc[ing] = (acc[ing] || 0) + 1;
            return acc;
          }, {});
           const recommendedRecipes = state.recipes.filter((recipe) =>
          recipe.ingredients.some((ingredient) => favoriteIngredients[ingredient])
        );

        return {
          recommendations: recommendedRecipes.filter(
            (rec) => !state.favorites.some((fav) => fav.id === rec.id)
          ),
        };
      }
      return { recommendations: [] };
    
    })
      })),
  }));


export default useRecipeStore
