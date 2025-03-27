import restourant from "../../assets/restourant.jpg";
import steak from "../../assets/steak-frites.jpg";
import reservation from "../../assets/reservation.jpg";
import classes from "./HomePage.module.css";
import About from "../UI/About";
export default function HomePage() {
  return (
    <>
      <main>
        <div className={classes.main}>
          <div
            className={classes.background}
            style={{
              backgroundImage: `url(${restourant})`,
            }}
          >
            <div className={classes.container}>
              <h1>Welcome to KitchenMP</h1>
              <p>
                Newly established restaurant in Pleven. We offer a diverse
                selection of delicious dishes, crafted to satisfy every palate.
                Our inviting atmosphere and dedicated team are committed to
                ensuring your complete satisfaction. We look forward to serving
                you, whether through our online menu or in person.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.menu}>
          <div className={classes.areaSteak}>
            <About
              title="Dine With Us"
              text="Experience KitchenMP signature dishes like Steak Frites, Chicken
              Curry, Miso Ramen and more."
              img={steak}
              alt="steak"
              link="/menu"
              buttonName="Menu"
            />
          </div>
          <div className={classes.div2}>
            <About
              title="Discover our Chef's Tables"
              text="We invite you to make a reservation with us, whether for lunch or
              dinner. Our restaurant provides the perfect setting for any
              celebration."
              img={reservation}
              alt="reservation"
              link="/reservation"
              buttonName="Reservation"
            />
          </div>
        </div>
      </main>
    </>
  );
}
