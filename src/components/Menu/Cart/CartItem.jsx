import { currencyFormatter } from "../../../util/formatting";
import classes from "./CartItem.module.css";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className={classes.item}>
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className={classes.actions}>
        <button className={classes.button} onClick={onDecrease}>
          -
        </button>
        <span>{quantity}</span>
        <button className={classes.button} onClick={onIncrease}>
          +
        </button>
      </p>
    </li>
  );
}
