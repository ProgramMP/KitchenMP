import useHttp from "../../hooks/useHttp";
import MenuItems from "./MenuItems";
import ErrorBlock from "../UI/ErrorBlock";
import Cart from "./Cart/Cart";
import Checkout from "./Cart/Chekout";
import CartButton from "./Cart/CartButton";
import classes from "./Menu.module.css";

const requestConfig = {};

export default function Menu() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("https://backend-kitchen.onrender.com/meals", requestConfig, []);

  if (isLoading) {
    return <p className={classes.fetch}>Fetching meals...</p>;
  }

  if (error) {
    return <ErrorBlock title="Failed to fetch meals" message={error} />;
  }

  return (
    <div className={classes.menu}>
      <CartButton />
      <div className={classes.meals}>
        {loadedMeals.map((meals) => (
          <MenuItems key={meals.id} meal={meals}></MenuItems>
        ))}
      </div>
      <Cart />
      <Checkout />
    </div>
  );
}
