import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";
import Cart from "../components/Menu/Cart/Cart";
import Checkout from "../components/Menu/Cart/Chekout";
import CartButton from "../components/Menu/Cart/CartButton";
import Footer from "../components/Footer/Footer";

export default function MenuPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Menu />
      <Footer />
    </>
  );
}
