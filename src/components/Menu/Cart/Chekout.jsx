import { useContext } from "react";
import Modal from "../../UI/Modal";
import CartContext from "../../../Store/CartContext";
import { currencyFormatter } from "../../../util/formatting";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { UserProgressContext } from "../../../Store/UserProgressContext";
import useHttp from "../../../hooks/useHttp";
import ErrorBlock from "../../UI/ErrorBlock";
import classes from "./Chekout.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
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
      <Modal
        open={userProgressCtx.progresss === "checkout"}
        onClose={handleFinish}
      >
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
      open={userProgressCtx.progresss === "checkout"}
      onClose={userProgressCtx.progresss === "checkout" ? handleClose : null}
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
