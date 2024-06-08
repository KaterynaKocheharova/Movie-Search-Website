import css from "./MovieReviewsCard.module.css";

const MovieReviewCard = ({ reviewData: { author, content } }) => {
  return (
    <>
      <h3 className={css.title}>{author}</h3>
      <p className={css["review-text"]}>{content}</p>
    </>
  );
};

export default MovieReviewCard;
