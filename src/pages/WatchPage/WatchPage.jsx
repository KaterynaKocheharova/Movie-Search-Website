import { useParams } from "react-router-dom";
import css from "./WatchPage.module.css";

const WatchPage = () => {
  const { movieId } = useParams();
  return <div>{movieId}</div>;
};

export default WatchPage;
