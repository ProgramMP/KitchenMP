import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/KitchenLogo1.jpg";
import classes from "./MenuBar.module.css";

export default function MenuBar() {
  const [isMenu, setIsMenu] = useState(null);
  const [menu, setMenu] = useState();

  function handleOpenMenu() {
    setIsMenu((past) => !past);
  }
  useEffect(() => {
    if (isMenu) {
      setMenu(
        <ul className={classes.smenu}>
          <p>
            <li>
              <Link onClick={handleOpenMenu} to="/" className={classes.alist}>
                Abous us
              </Link>
            </li>
          </p>
          <p>
            <li>
              <Link
                onClick={handleOpenMenu}
                to="/menu"
                className={classes.alist}
              >
                Menu
              </Link>
            </li>
          </p>
          <p>
            <li>
              <Link
                onClick={handleOpenMenu}
                to="/reservation"
                className={classes.alist}
              >
                Reservation
              </Link>
            </li>
          </p>
          <p>
            <li>
              <Link
                onClick={handleOpenMenu}
                to="/contact"
                className={classes.alist}
              >
                Contact Us
              </Link>
            </li>
          </p>
        </ul>
      );
    }

    if (!isMenu) {
      setMenu(null);
    }
  }, [isMenu]);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.nothing}>
          <a onClick={handleOpenMenu} className={classes.button}>
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
          </a>
          <div>{menu}</div>
        </div>
        <Link className={classes.wrapper}>
          <img className={classes.img} src={logo} alt="A restaurant" />
        </Link>
        <ul className={classes.ulist}>
          <li className={classes.li}></li>
          <p>
            <li className={classes.li}>
              <Link className={classes.list} to="/">
                Abous us
              </Link>
            </li>
          </p>
          <p>
            <li className={classes.li}>
              <Link className={classes.list} to="/menu">
                Menu
              </Link>
            </li>
          </p>
          <p>
            <li className={classes.li}>
              <Link className={classes.list} to="/reservation">
                Reservation
              </Link>
            </li>
          </p>
          <p>
            <li className={classes.li}>
              <Link className={classes.list} to="/contact">
                Contact Us
              </Link>
            </li>
          </p>
        </ul>
      </main>
    </>
  );
}
