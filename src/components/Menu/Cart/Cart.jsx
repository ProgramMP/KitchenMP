import { useContext } from "react";
import Modal from "../../UI/Modal";
import CartContext from "../../../Store/CartContext";
import { currencyFormatter } from "../../../util/formatting";
import Button from "../../UI/Button";
import { UserProgressContext } from "../../../Store/UserProgressContext";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToChekout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className={classes.cart}
      open={userProgressCtx.progresss === "cart"}
      onClose={userProgressCtx.progresss === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => cartCtx.removeItem(item.id)}
            onIncrease={() => cartCtx.addItem(item)}
          />
        ))}
      </ul>
      <p className={classes.total}>{currencyFormatter.format(cartTotal)}</p>
      <p className={classes.actions}>
        <button className={classes.button} onClick={handleCloseCart}>
          Close
        </button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToChekout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
