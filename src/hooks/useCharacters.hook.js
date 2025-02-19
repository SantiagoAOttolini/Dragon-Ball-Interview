import { useState, useEffect } from "react";
import { getCharacters } from "../services/dragon-ball-api.services";

const useCharacters = (initialPage = 1, initialLimit = 50) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = await getCharacters(page, initialLimit);
      setCharacters(data.items);
      setTotalPages(data.meta.totalPages);
      setLoading(false);
    };

    fetchCharacters();
  }, [page, initialLimit]);

  const nextPage = () =>
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return { characters, loading, page, totalPages, nextPage, prevPage };
};

export default useCharacters;
