import { useFetchTrendingMovies } from "../../hooks";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

const Home = () => {
  const { movies, loading, error } = useFetchTrendingMovies();
  return (
    <>
      <h2 className={css.title}>Trending Today</h2>
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
