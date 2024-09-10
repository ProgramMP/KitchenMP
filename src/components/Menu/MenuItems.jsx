import { useContext } from "react";
import { currencyFormatter } from "../../util/formatting.js";
import CartContext from "../../Store/CartContext.jsx";
import Button from "../UI/Button.jsx";
import classes from "./MenuItems.module.css";

export default function MenuItems({ meal }) {
  const cartCtx = useContext(CartContext);
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className={classes.item}>
      <article className={classes.article}>
        <img
          className={classes.img}
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3 className={classes.name}>{meal.name}</h3>
          <p className={classes.price}>
            {currencyFormatter.format(meal.price)}
          </p>
          <p className={classes.description}>{meal.description}</p>
        </div>
        <p className={classes.action}>
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
