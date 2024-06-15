import css from "./Error.module.css"

const Error = ({ error }) => {
  return (
    <p className={css.error}>
      Oops. Something went wrong. Check your internet connection or try again
      later. {error}
    </p>
  );
};

export default Error;
