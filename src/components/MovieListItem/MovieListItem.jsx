import { Link, useLocation } from "react-router-dom";
import { defaultMovieImg } from "../../default-props";
import GenresList from "../GenresList/GenresList";
import css from "./MovieListItem.module.css";

const MovieListItem = ({
  movie: { id, original_title, backdrop_path, genre_ids },
  genres,
}) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={location}>
      <div className={css["image-container"]}>
        <img
          className={css["movie-image"]}
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
              : defaultMovieImg
          }
          alt="film poster"
        />
      </div>

      <div className={css["bottom-container"]}>
        <h3 className={css["movie-name"]}>{original_title}</h3>
        <GenresList ids={genre_ids} genres={genres} />
      </div>
    </Link>
  );
};

export default MovieListItem;
