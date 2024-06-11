import { forwardRef, useEffect } from "react";
import MovieCastCard from "../MovieCastCard/MovieCastCard";
import Grid from "../Grid/Grid";
import css from "./MovieCaseList.module.css";
import { handleScrollDown } from "../../helpers/scrolling";

const MovieCastList = forwardRef(({ currentItems }, ref) => {
  useEffect(() => {
    handleScrollDown(ref.current);
  }, [ref]);

  return (
    <>
      <Grid>
        {currentItems.map((castItem, index) => (
          <li
            ref={index === 0 ? ref : null}
            className={css["item"]}
            key={castItem.id}
          >
            <MovieCastCard castItemData={castItem} />
          </li>
        ))}
      </Grid>
    </>
  );
});

MovieCastList.displayName = "MovieCastList";

export default MovieCastList;
