import axios from 'axios';

const BASE_URL = 'https://api.github.com';

/**
 * Fetches GitHub users based on advanced search criteria.
 * @param {string} query - The search query string with advanced parameters.
 * @returns {Promise<Object>} - The search results from the GitHub API.
 */

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
        params: {q: query},
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
