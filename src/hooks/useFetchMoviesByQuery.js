import { useEffect, useState, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../movies-api";
import { handleScrollDown } from "../helpers/scrolling";

export const useFetchMoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const query = useMemo(() => searchParams.get("query") ?? "", [searchParams]);
  useEffect(() => {
    setLoading(true);
    setError(null);
    const getMovies = async () => {
      try {
        if (!query) return;
        const moviesData = await getMoviesByQuery(query, currentPage);
        if (currentPage === 1) {
          setMaxPages(moviesData.data.total_pages);
          setMovies(moviesData.data.results);
        } else {
          setMovies((prevMovies) => [
            ...prevMovies,
            ...moviesData.data.results,
          ]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [searchParams, query, currentPage]);

  const handleSubmit = (value) => {
    setCurrentPage(1);
    setMovies([]);
    setSearchParams({ query: value });
  };

  const handleLoadMoreClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const moviesItemRef = useRef();

  useEffect(() => {
    if (currentPage === 1) return;
    handleScrollDown(moviesItemRef.current);
  }, [movies, currentPage]);

  return {
    movies,
    loading,
    error,
    currentPage,
    maxPages,
    handleSubmit,
    handleLoadMoreClick,
    moviesItemRef,
    query,
  };
};
