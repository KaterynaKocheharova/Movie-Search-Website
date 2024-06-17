import { useEffect, useState } from "react";
import { getTrendingMoviesToday } from "../movies-api";

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMoviesData = async () => {
      setError(null);
      setLoading(true);
      try {
        const moviesData = await getTrendingMoviesToday();
        setMovies(moviesData.results);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMoviesData();
  }, []);

  return { movies, loading, error };
};
