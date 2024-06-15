import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../../movies-api";
import MoviesSearchBar from "../../components/MoviesSearchBar/MoviesSearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/Button/Button";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    setLoading(true);
    setError(null);
    const getMovies = async () => {
      try {
        if (!query) return;
        const moviesData = await getMoviesByQuery(query, currentPage);
        moviesData.data.results.forEach((result) => {
          console.log(`${result.id}`);
        });
        console.log("The end of this request");
        if (currentPage === 1) {
          setMaxPages(moviesData.data["total_pages"]);
          setMovies(moviesData.data.results);
        } else {
          setMovies((prevMovies) => [
            ...prevMovies,
            ...moviesData.data.results,
          ]);
        }
      } catch (error) {
        setError(error);
        console.error(error);
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

  return (
    <>
      <MoviesSearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {/* {!movies.length && !loading && query !== "" && (
        <p>No movies found matching your query.</p>
      )} */}
      {movies.length > 0 && !loading && currentPage < maxPages && (
        <Button onClick={handleLoadMoreClick} shouldCenter>
          Load more
        </Button>
      )}
    </>
  );
};

export default MoviesPage;
