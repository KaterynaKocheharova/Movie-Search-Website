import MovieCastCard from "../MovieCastCard/MovieCastCard";
import Grid from "../Grid/Grid";
import css from "./MovieCaseList.module.css";

const MovieCastList = ({ castData }) => {
  return (
    <Grid isMovieCast>
      {castData.map((castItem) => (
        <li className={css["item"]} key={castItem.id}>
          <MovieCastCard castItemData={castItem} />
        </li>
      ))}
    </Grid>
  );
};

export default MovieCastList;
