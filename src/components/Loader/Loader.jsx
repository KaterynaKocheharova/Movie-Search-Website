import css from "./Loader.module.css";
import { Audio } from 'react-loader-spinner'
;

const Loader = () => {
  return <p className={css.loader}>Loading... <Audio
  height="30"
  width="30"
  radius="9"
  color="red"
  ariaLabel="loading"
/></p>;
};

export default Loader;
