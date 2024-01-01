// client/src/components/SearchPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/search/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (value === "") {
      setSearchResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center mt-16 p-4 sm:p-8 border rounded shadow-lg max-w-[50%] mx-auto">
      <h1 className="text-3xl font-bold mb-4">Search Wikipedia</h1>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full sm:w-60 px-3 py-2 border rounded outline-none"
          placeholder="Search"
        />
        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <ul className="mt-8 space-y-4">
        {searchResults.map((result) => (
          <li key={result.pageid} className="text-blue-500 hover:underline">
            <Link to={`/wiki/${result.title}`}>{result.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
