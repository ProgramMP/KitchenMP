import restourant from "../../assets/restourant.jpg";
import headerClasses from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <main>
        <header className={headerClasses.header}>
          <img
            src={restourant}
            alt="Modern minimalist restaurant interior"
            className={headerClasses.headerImage}
          />
          <div className={headerClasses.heroOverlay} />
          <div className={headerClasses.headerContent}>
            <h1 className={headerClasses.headerTitle}>Welcome to KitchenMP</h1>
            <p className={headerClasses.headerDescription}>
              Newly established restaurant in Pleven. We offer a diverse
              selection of delicious dishes, crafted to satisfy every palate.
              Our inviting atmosphere and dedicated team are committed to
              ensuring your complete satisfaction.
            </p>
            <div className={headerClasses.headerButtons}>
              <a
                href="/reservation"
                className={`${headerClasses.headerButton} ${headerClasses.bookTableBtn}`}
              >
                Book a Table
              </a>
              <a
                href="/menu"
                className={`${headerClasses.headerButton} ${headerClasses.viewMenuBtn}`}
              >
                View Menu
              </a>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
