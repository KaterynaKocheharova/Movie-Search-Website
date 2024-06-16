import css from "./Error.module.css";

const Error = ({ children, error }) => {
  return (
    <>
      <p className={css.error}>{children}</p>
      {error && <p>{error}</p>}
    </>
  );
};

export default Error;
