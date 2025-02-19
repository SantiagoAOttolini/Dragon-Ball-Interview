//Services
import { getCachedData, setCachedData } from "./save-cache-data.services";

const BASE_URL = "https://dragonball-api.com/api";

export const getCharacters = async (page = 1, limit = 50) => {
  const cacheKey = `characters_${page}_${limit}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) return cachedData;

  try {
    const response = await fetch(
      `${BASE_URL}/characters?page=${page}&limit=${limit}`
    );
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    return { items: [], meta: {} };
  }
};

export const getCharacterById = async (id) => {
  const cacheKey = `character_${id}`;
  const cachedData = getCachedData(cacheKey);
  if (cachedData) return cachedData;

  try {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    setCachedData(cacheKey, data);
    return data;
  } catch (error) {
    console.error("Error al obtener el detalle del personaje:", error);
    return null;
  }
};
