import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { fetchAdvancedSearchResults } from '../services/githubService';


const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);
    setResults([]);

    const query = [
        username ? `user:${username}` : '',
        location ? `location:${location}` : '',
        minRepos ? `repos:>${minRepos}` : '',
      ]
        .filter(Boolean)
        .join(' ');


    try {
      const userData = await fetchUserData(username);
      setUser(userData);
      const searchResults = await fetchAdvancedSearchResults(query);
      setResults(searchResults.items);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Advanced GitHub User Search</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-center space-x-4 shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <p>{user.location || 'Location not available'}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
