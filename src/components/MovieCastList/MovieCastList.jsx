import { useRef, useEffect } from "react";
import MovieCastCard from "../MovieCastCard/MovieCastCard";
import Grid from "../Grid/Grid";
import css from "./MovieCaseList.module.css";
import { handleScrollDown } from "../../helpers/scrolling";

const MovieCastList = ({ currentItems }) => {
  const castItemRef = useRef();
  useEffect(() => {
    if (castItemRef.current) {
      handleScrollDown(castItemRef.current);
    }
  }, [castItemRef]);

  return (
    <>
      <Grid>
        {currentItems.map((castItem, index) => (
          <li
            ref={index === 0 ? castItemRef : null}
            className={css["item"]}
            key={castItem.id}
          >
            <MovieCastCard castItemData={castItem} />
          </li>
        ))}
      </Grid>
    </>
  );
};

export default MovieCastList;
