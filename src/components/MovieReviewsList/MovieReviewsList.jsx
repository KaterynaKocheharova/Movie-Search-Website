import { useEffect } from "react";
import { handleScrollDownByHalf } from "../../helpers/scrolling";
import MovieReviewCard from "../MovieReviewCard/MovieReviewCard";
import css from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ currentItems }) => {
  useEffect(() => {
    handleScrollDownByHalf();
  });

  return (
    <ul className={css["list"]}>
      {currentItems.map((reviewItem) => (
        <li className={css.item} key={reviewItem.id}>
          <MovieReviewCard reviewData={reviewItem} />
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
