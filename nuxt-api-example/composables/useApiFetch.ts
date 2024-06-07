const baseURL = 'http://localhost:8000/api/v2/shop';

export const apiFetch = $fetch.create({
  baseURL,
});

export const useApiFetch: typeof useFetch = (url, options) =>
  useFetch(url, { baseURL, ...options });
