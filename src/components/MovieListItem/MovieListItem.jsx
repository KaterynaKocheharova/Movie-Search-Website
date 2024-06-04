import { Link, useLocation } from "react-router-dom";
import GenresList from "../GenresList/GenresList";
import css from "./MovieListItem.module.css";

const MovieListItem = ({
  movie: { id, original_title, backdrop_path, genre_ids },
  genres,
}) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={location}>
      <img
        className={css["movie-image"]}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt="film poster"
      />
      <div className={css["bottom-container"]}>
        <h3 className={css["movie-name"]}>{original_title}</h3>
        <GenresList ids={genre_ids} genres={genres} />
      </div>
    </Link>
  );
};

export default MovieListItem;
