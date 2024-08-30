import { useContext } from "react";
import Button from "../components/UI/Button";
import CartContext from "../Store/CartContext";
import { UserProgressContext } from "../Store/UserProgressContext";

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
    <header id="main-header">
      <Button textOnly onClick={handleShowCart}>
        Cart ({totalCartItems})
      </Button>
    </header>
  );
}
