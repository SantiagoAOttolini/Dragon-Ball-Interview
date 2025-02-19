import { useEffect, useState } from 'react';
import { getCharacters } from '../services/dragon-ball-api.services';

const useCharacters = (initialPage = 1, limit = 20) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const { items, meta } = await getCharacters(page, limit);
      setCharacters(items);
      setTotalPages(meta?.totalPages || 1);
      setLoading(false);
    };

    fetchCharacters();
  }, [page, limit]);

  const nextPage = () => page < totalPages && setPage((prev) => prev + 1);
  const prevPage = () => page > 1 && setPage((prev) => prev - 1);

  return { characters, loading, page, totalPages, nextPage, prevPage };
};

export default useCharacters;