import React from 'react';
import useRecipeStore from './store';
const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
    return (
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  };