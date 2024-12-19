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

    const response = await axios.get(`${BASE_URL}?q=${searchQuery}`);
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
