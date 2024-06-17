import { useFetchReviews } from "../../hooks/useFetchReviews";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieReviews = () => {
  const { movieReviewsData, loading, error } = useFetchReviews();

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {movieReviewsData && !movieReviewsData.length && !loading && (
        <Error>No reviews found</Error>
      )}
      {movieReviewsData && movieReviewsData.length > 0 && (
        <PaginatedItems
          data={movieReviewsData}
          itemsPerPage={1}
          RenderComponent={MovieReviewsList}
        />
      )}
    </>
  );
};

export default MovieReviews;
