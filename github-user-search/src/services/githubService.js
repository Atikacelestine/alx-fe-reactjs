import axios from 'axios';

const BASE_URL = 'https://api.github.com'


/**
 * Search for GitHub users based on query parameters.
 * 
 * @param {string} query - The search query (e.g., username or part of a username).
 * @param {string} location - Filter by user location (optional).
 * @param {number} minRepos - Minimum number of repositories (optional).
 * @returns {Promise<Object>} - A promise that resolves to the search results.
 */
 
export const fetchAdvancedSearchResults = async (filters) => {
  const { username, location, minRepos } = filters;

  // Construct the search query
  const query = [
    username ? `user:${username}` : '',
    location ? `location:${location}` : '',
    minRepos ? `repos:>${minRepos}` : '',
  ]
    .filter(Boolean);
    .join(' ');
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: { q: query }, // Pass the constructed query
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`, // Use API key from environment
      },
    });

export const searchUsers = async (query, location = '', minRepos = 0) => {
  try {
    let searchQuery = query;

    // Append location filter if provided
    if (location) {
      searchQuery += `+location:${location}`;
    }

    // Append minimum repositories filter if provided
    if (minRepos > 0) {
      searchQuery += `+repos:>=${minRepos}`;
    }
const headers = {
  Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
};
    
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}` , {header});
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
