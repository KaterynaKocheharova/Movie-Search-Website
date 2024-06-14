import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, onClick, shouldCenter }) => {
  return (
    <button
      className={clsx(css.button, shouldCenter && css["centered-btn"])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
