import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Menu/Cart/Cart";
import Checkout from "../components/Menu/Cart/Chekout";
import CartButton from "../components/Menu/Cart/CartButton";

export default function MenuPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Outlet />
      <main>
        <CartButton />
        <Menu />
        <Cart />
        <Checkout />
      </main>
    </>
  );
}
