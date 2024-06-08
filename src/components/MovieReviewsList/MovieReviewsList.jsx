import MovieReviewCard from "../MovieReviewCard/MovieReviewCard";
import css from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ reviewsData }) => {
  return (
    <ul className={css["list"]}>
      {reviewsData.map((reviewItem) => (
        <li className={css.item} key={reviewItem.id}>
          <MovieReviewCard reviewData={reviewItem} />
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsList;
