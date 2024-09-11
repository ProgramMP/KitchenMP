import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../../../util/formatting";
import { cartActions } from "../../../Store/CartContext";
import { uiActions } from "../../../Store/UserProgressContext";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import classes from "./Cart.module.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.ui.showCart);
  const items = useSelector((state) => state.cart.items);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    dispatch(uiActions.hideCart());
  }

  function handleGoToChekout() {
    dispatch(uiActions.hideCart());
    dispatch(uiActions.showCheckout());
  }

  return (
    <Modal
      className={classes.cart}
      open={cart === "cart"}
      onClose={cart === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => dispatch(cartActions.removeItem(item.id))}
            onIncrease={() => dispatch(cartActions.addItem(item))}
          />
        ))}
      </ul>
      <p className={classes.total}>{currencyFormatter.format(cartTotal)}</p>
      <p className={classes.actions}>
        <button className={classes.button} onClick={handleCloseCart}>
          Close
        </button>
        {items.length > 0 && (
          <Button onClick={handleGoToChekout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
