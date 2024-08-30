import useHttp from "../../hooks/useHttp";
import ErrorBlock from "./ErrorBlock";
import { useState, useEffect } from "react";

const requestConfig = {};

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  let content;

  if (isLoading) {
    content = <p className="center">Fetching meals...</p>;
  }

  if (error) {
    content = <ErrorBlock title="Failed to fetch meals" message={error} />;
  }

  if (loadedMeals) {
    // content = <img src={`http://localhost:3000/${loadedMeals[1].image}`} />;
  }

  return (
    <div className={classes.slideshow}>
      {loadedMeals.map((meal) => (
        <img
          key={meal.id}
          src={`http://localhost:3000/${meal.image}`}
          className={meal.id === currentImageIndex ? classes.active : ""}
          alt={meal.alt}
        />
      ))}
    </div>
  );
}
