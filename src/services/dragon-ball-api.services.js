const BASE_URL = 'https://dragonball-api.com/api';

export const getCharacters = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/characters?page=${page}&limit=${limit}`);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    return { items: [], meta: {} };
  }
};