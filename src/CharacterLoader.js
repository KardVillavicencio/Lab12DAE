// src/CharacterLoader.js

import React, { useState } from 'react';
import SearchForm from './SearchForm';
import CharacterList from './CharacterList';
import axios from 'axios';
import { Container } from 'react-bootstrap';

// src/CharacterLoader.js

// ... (importes)

const CharacterLoader = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const handleSearch = async (searchTerm) => {
      setLoading(true);
  
      try {
        // Modificar la URL para realizar una búsqueda parcial
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
        setSearchResults(response.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <Container className="mt-4">
        <h1 className="mb-4">Personajes de Star Wars</h1>
        <SearchForm onSearch={handleSearch} />
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <CharacterList characters={searchResults.length > 0 ? searchResults : null} />
        )}
      </Container>
    );
  };
  
  export default CharacterLoader;
  
