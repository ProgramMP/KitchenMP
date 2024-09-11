import restourant from "../../assets/restourant.jpg";
import steak from "../../assets/steak-frites.jpg";
import reservation from "../../assets/reservation.jpg";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HomePage() {
  return (
    <>
      <header>
        <h1 className={classes.h1}>Welcome to KitchenMP</h1>
      </header>

      <main className={classes.main}>
        <LazyLoadImage src={restourant} alt="restourant" />
        <p>
          Welcome to KitchenMP, a newly established restaurant in Pleven. We
          offer a diverse selection of delicious dishes, crafted to satisfy
          every palate. Our inviting atmosphere and dedicated team are committed
          to ensuring your complete satisfaction. We look forward to serving
          you, whether through our online menu or in person.
        </p>
      </main>
      <main className={classes.menu}>
        <div className={classes.div1}>
          <h2 className={classes.h2}>Dine With Us</h2>
          <LazyLoadImage className={classes.img} src={steak} alt="steak" />
          <p className={classes.p}>
            Experience KitchenMP signature dishes like Steak Frites, Chicken
            Curry, Miso Ramen, Beef Tacos, and more.
          </p>
          <Link className={classes.a} to="/menu">
            Menu
          </Link>
        </div>
        <div className={classes.div2}>
          <h2 className={classes.h2}>Discover our Chef's Tables</h2>
          <LazyLoadImage
            className={classes.img}
            src={reservation}
            alt="reservation"
          />
          <p className={classes.p}>
            We invite you to make a reservation with us, whether for lunch or
            dinner. Our restaurant provides the perfect setting for any
            celebration or special occasion.
          </p>
          <Link className={classes.a} to="/reservation">
            Reservation
          </Link>
        </div>
      </main>
    </>
  );
}
