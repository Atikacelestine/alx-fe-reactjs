import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useRecipeStore from './store'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './components/DeleteRecipeButton';
import FavoritesList from './FavoritesList';
import RecommendationsList from './RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/Recipelist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  const App = () => {
    const { recipes, addRecipe } = useRecipeStore();
    const [newRecipe, setNewRecipe] = useState({ title: '', description: '' });
    const [editingRecipeId, setEditingRecipeId] = useState(null);
  
    const handleAddRecipe = () => {
      if (newRecipe.title.trim() && newRecipe.description.trim()) {
        const id = Date.now(); // Unique ID
        addRecipe({ ...newRecipe, id });
        setNewRecipe({ title: '', description: '' });
      }
    };
  }
  return (
    <>

<Router>

< div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}> 
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Recipe App</h1>
              <input
                type="text"
                placeholder="Recipe Title"
                value={newRecipe.title}
                onChange={(e) =>
                  setNewRecipe({ ...newRecipe, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Recipe Description"
                value={newRecipe.description}
                onChange={(e) =>
                  setNewRecipe({ ...newRecipe, description: e.target.value })
                }
              />
              <button onClick={handleAddRecipe}>Add Recipe</button>
              <ul>
                {recipes.map((recipe) => (
                  <li key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
{'}'};



      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
      </div>


      <div>
      <h1>Recipe App</h1>
      <input
        type="text"
        placeholder="Recipe Title"
        value={newRecipe.title}
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Recipe Description"
        value={newRecipe.description}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, description: e.target.value })
        }
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>

      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <button onClick={() => setEditingRecipeId(recipe.id)}>
              Edit
            </button>
            <DeleteRecipeButton recipeId={recipe.id} />
            <RecipeDetails recipeId={recipe.id} />
          </li>
        ))}
      </ul>

      {editingRecipeId && (
        <EditRecipeForm
          recipeId={editingRecipeId}
          onClose={() => setEditingRecipeId(null)}
        />
      )}
    </div>
  );
&rbrace;;
    </>
  )
}

export default App
