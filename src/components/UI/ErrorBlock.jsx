import classes from "./ErrorBlock.module.css";

export default function ErrorBlock({ title, message }) {
  return (
    <div className={classes.color}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
