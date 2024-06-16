import { useState, useEffect, forwardRef } from "react";
import { getAllGenres } from "../../movies-api";
import Grid from "../Grid/Grid";
import MovieListItem from "../MovieListItem/MovieListItem";
import css from "./MovieList.module.css";

const MovieList = forwardRef(({ movies }, ref) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await getAllGenres();
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    getGenres();
  }, []);

  return (
    <ul className={css.grid}>
      {genres.length > 0 &&
        movies.map((movie, index) => (
          <li
            ref={index === 0 ? ref : null}
            className={css["movie-item"]}
            key={movie.id}
          >
            <MovieListItem movie={movie} genres={genres} />
          </li>
        ))}
    </ul>
  );
});

MovieList.displayName = "MovieList";

export default MovieList;
