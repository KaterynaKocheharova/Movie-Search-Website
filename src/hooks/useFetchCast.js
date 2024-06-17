import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../movies-api";

export const useFetchCast = () => {
  const { movieId } = useParams();
  const [movieCastData, setMovieCastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastData = async () => {
      setLoading(true);
      setError(false);
      if (!movieId) return;
      try {
        const castData = await getMovieCast(movieId);
        setMovieCastData(castData.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCastData();
  }, [movieId]);

  return { movieCastData, loading, error };
};
