import css from "./Button.module.css";

export default function Button({ children, ...props }) {
  return (
    <button className={css.button} {...props}>
      <span className={css.buttonText}>{children}</span>
    </button>
  );
}
