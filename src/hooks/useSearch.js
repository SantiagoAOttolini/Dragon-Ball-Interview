import { useState, useMemo } from 'react';

const useSearch = (characters = []) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = useMemo(() => {
    return characters.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [characters, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredCharacters,
  };
};

export default useSearch;