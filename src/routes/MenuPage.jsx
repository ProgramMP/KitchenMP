import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import Checkout from "../components/Chekout";
import CartButton from "../components/CartButton";

export default function MenuPage() {
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
