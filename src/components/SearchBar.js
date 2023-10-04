import React from 'react';
import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = event => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search cars..." onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
