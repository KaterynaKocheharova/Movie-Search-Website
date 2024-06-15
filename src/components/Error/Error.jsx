import css from "./Error.module.css";

const Error = ({ children, error }) => {
  return (
    <>
      <p className={css.error}>{children}</p>
      <p>{error && error}</p>
    </>
  );
};

export default Error;
