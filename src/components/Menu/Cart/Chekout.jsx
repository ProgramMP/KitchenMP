import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../Store/CartContext";
import { uiActions } from "../../../Store/UserProgressContext";
import { currencyFormatter } from "../../../util/formatting";
import useHttp from "../../../hooks/useHttp";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import ErrorBlock from "../../UI/ErrorBlock";
import classes from "./Chekout.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.ui.showCheckout);
  const items = useSelector((state) => state.cart.items);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("https://backend-kitchen.onrender.com/orders", requestConfig);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    dispatch(uiActions.hideCheckout());
  }

  function handleFinish() {
    clearData();
    dispatch(cartActions.clearCart());
    dispatch(uiActions.hideCheckout());
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <button type="button" className={classes.button} onClick={handleClose}>
        Close
      </button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={checkout === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className={classes.actions}>
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={checkout === "checkout"}
      onClose={checkout === "checkout" ? handleClose : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        {error && <ErrorBlock title="Failed to submit order" message={error} />}

        <p className={classes.actions}>{actions}</p>
      </form>
    </Modal>
  );
}
