import { useFetchMoviesByQuery } from "../../hooks";
import MoviesSearchBar from "../../components/MoviesSearchBar/MoviesSearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

const MoviesPage = () => {
  const {
    movies,
    loading,
    error,
    currentPage,
    maxPages,
    handleSubmit,
    handleLoadMoreClick,
    moviesItemRef,
    query,
  } = useFetchMoviesByQuery();

  return (
    <>
      <MoviesSearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && (
        <Error>
          Oops. Something went wrong. Check your internet connection. Error:
          {error.message}
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
