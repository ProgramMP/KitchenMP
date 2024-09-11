import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../Store/UserProgressContext";
import classes from "./CartButton.module.css";

export default function CartButton() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    dispatch(uiActions.showCart());
  }

  return (
    <button className={classes.button} onClick={handleShowCart}>
      Cart ({totalCartItems})
    </button>
  );
}
