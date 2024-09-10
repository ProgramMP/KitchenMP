import { useContext } from "react";
import CartContext from "../../../Store/CartContext";
import { UserProgressContext } from "../../../Store/UserProgressContext";
import classes from "./CartButton.module.css";

export default function CartButton() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <button className={classes.button} onClick={handleShowCart}>
      Cart ({totalCartItems})
    </button>
  );
}
