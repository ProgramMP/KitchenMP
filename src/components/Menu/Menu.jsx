import MenuItems from "./MenuItems";
import ErrorBlock from "../UI/ErrorBlock";
import useHttp from "../../hooks/useHttp";
import classes from "./Menu.module.css";

const requestConfig = {};

export default function Menu() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <ErrorBlock title="Failed to fetch meals" message={error} />;
  }

  return (
    <div className={classes.meals}>
      {loadedMeals.map((meals) => (
        <MenuItems key={meals.id} meal={meals}></MenuItems>
      ))}
    </div>
  );
}