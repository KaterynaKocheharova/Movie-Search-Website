import { useRef, useEffect } from "react";
import { handleScrollDownByHalf } from "../../helpers/scrolling";
import MovieReviewCard from "../MovieReviewCard/MovieReviewCard";
import css from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ currentItems }) => {
  const reviewItemRef = useRef();
  useEffect(() => {
    if (reviewItemRef.current) {
      handleScrollDownByHalf(reviewItemRef.current);
    }
  }, [reviewItemRef]);

  return (
    <ul className={css["list"]} ref={reviewItemRef}>
      {currentItems.map((reviewItem, index) => (
        <li
          ref={index === 0 ? reviewItemRef : null}
          className={css.item}
          key={reviewItem.id}
        >
          <MovieReviewCard reviewData={reviewItem} />
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
