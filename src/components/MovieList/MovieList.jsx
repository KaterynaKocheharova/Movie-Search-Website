import { useState, useEffect } from "react";
import { getAllGenres } from "../../movies-api";
import Grid from "../Grid/Grid";
import MovieListItem from "../MovieListItem/MovieListItem";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genres = await getAllGenres();
      setGenres(genres.data.genres);
    };

    getGenres();
  }, []);

  return (
    <Grid>
      {genres.length > 0 &&
        movies.map((movie) => {
          return (
            <li className={css["movie-item"]} key={movie.id}>
              <MovieListItem movie={movie} genres={genres} />
            </li>
          );
        })}
    </Grid>
  );
};

export default MovieList;
