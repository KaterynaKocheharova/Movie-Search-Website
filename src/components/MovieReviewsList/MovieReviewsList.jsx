import { forwardRef, useEffect } from "react";
import { handleScrollDown } from "../../helpers/scrolling";
import MovieReviewCard from "../MovieReviewCard/MovieReviewCard";
import css from "./MovieReviewsList.module.css";

const MovieReviewsList = forwardRef(({ currentItems }, ref) => {
  useEffect(() => {
    handleScrollDown(ref.current);
  }, [ref]);

  return (
    <ul className={css["list"]} ref={ref}>
      {currentItems.map((reviewItem, index) => (
        <li
          ref={index !== 0 ? ref : null}
          className={css.item}
          key={reviewItem.id}
        >
          <MovieReviewCard reviewData={reviewItem} />
        </li>
      ))}
    </ul>
  );
});

MovieReviewsList.displayName = "MovieReviewsList";

export default MovieReviewsList;
