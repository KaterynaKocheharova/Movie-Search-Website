import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { getMovieCast } from "../../movies-api";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import MovieCastList from "../MovieCastList/MovieCastList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCastData, setMovieCastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { castItemRef } = useOutletContext();

  useEffect(() => {
    const getCastData = async () => {
      setLoading(true);
      setError(false);
      if (!movieId) return;
      try {
        const castData = await getMovieCast(movieId);
        setMovieCastData(castData.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCastData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {movieCastData && !movieCastData && !loading && (
        <p>No infomation about the cast</p>
      )}
      {movieCastData && movieCastData.length > 0 && (
        <PaginatedItems
          ref={castItemRef}
          data={movieCastData}
          itemsPerPage={4}
          RenderComponent={MovieCastList}
        />
      )}
    </>
  );
};

export default MovieCast;
