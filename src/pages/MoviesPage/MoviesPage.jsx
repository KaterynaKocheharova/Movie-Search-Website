import { useEffect, useState, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../../movies-api";
import MoviesSearchBar from "../../components/MoviesSearchBar/MoviesSearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";
import { handleScrollDown } from "../../helpers/scrolling";

const MoviesPage = () => {
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

  return (
    <>
      <MoviesSearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && (
        <Error>
          Oops. Something went wrong. Check your internet connection or try
          again later.
        </Error>
      )}
      {movies.length > 0 && <MovieList movies={movies} ref={moviesItemRef} />}
      {!movies.length && query !== "" && !loading && !error && (
        <Error>No movies found matching your query.</Error>
      )}
      {movies.length > 0 && !loading && currentPage < maxPages && (
        <Button onClick={handleLoadMoreClick} shouldCenter>
          Load more
        </Button>
      )}
    </>
  );
};

export default MoviesPage;
