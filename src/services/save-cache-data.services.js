const CACHE_EXPIRATION = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

export const getCachedData = (key) => {
  const cachedItem = localStorage.getItem(key);
  if (!cachedItem) return null;

  const { data, timestamp } = JSON.parse(cachedItem);
  if (Date.now() - timestamp > CACHE_EXPIRATION) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
};

export const setCachedData = (key, data) => {
  const cachedItem = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(cachedItem));
};
