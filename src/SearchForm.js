// src/SearchForm.js

import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form className="mb-4">
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={handleChange}
        className="form-control"
      />
    </form>
  );
};

export default SearchForm;
