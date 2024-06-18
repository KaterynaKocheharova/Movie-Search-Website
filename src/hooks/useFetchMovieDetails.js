import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieDetails } from "../movies-api";

export const useFetchMovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovieById = async () => {
      setError(null);
      setLoading(true);
      try {
        const movieData = await getMovieDetails(movieId);
        setMovieData(movieData);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  return { movieData, loading, error, backLinkHref, movieId };
};
