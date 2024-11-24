import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
    // Using useQuery with staleTime and cacheTime configuration
    const { data, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
      staleTime: 5000, // Data stays fresh for 5 seconds
      cacheTime: 600000, // Data remains in cache for 10 minutes
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  
    if (isError) {
  return <p style={{ color: 'red' }}>Error: {error.message}</p>;
}




  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );

};
export default PostsComponent;
