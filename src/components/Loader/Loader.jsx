import css from "./Loader.module.css";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
      Loading. Please, wait...
      <Audio
        height="30"
        width="30"
        radius="9"
        color="red"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
