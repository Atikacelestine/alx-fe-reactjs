import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import { getUserData } from './services/githubApi'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const App = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
  
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const userData = await getUserData(username);
        setUser(userData);
        setError('');
      } catch (err) {
        setError('User not found.');
        setUser(null);
      }
    };
  };

  return (
    <>
    <div>
      <Navbar/>
    <div style={{padding: '1rem'}}>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter Github Username"  value={username}   onChange={(e) => setUsername (e.target.value)}  style={{padding: '0.5rem', marginRight: '0.5rem'}}/>
        <button type="submit" style={{padding: '0.5rem'}}>Search
        </button>
      </form>
      {error && <p style ={{color:'red'}}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
    </div>
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
    </>
  )
}

export default App
