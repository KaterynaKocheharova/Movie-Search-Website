import { useFetchCast } from "../../hooks";
import Error from "../Error/Error";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import MovieCastList from "../MovieCastList/MovieCastList";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieCastData, loading, error } = useFetchCast();

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {movieCastData && !movieCastData.length && !loading && (
        <Error>No infomation about the cast</Error>
      )}
      {movieCastData && movieCastData.length > 0 && (
        <PaginatedItems
          data={movieCastData}
          itemsPerPage={4}
          RenderComponent={MovieCastList}
        />
      )}
    </>
  );
};

export default MovieCast;
