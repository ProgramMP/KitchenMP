import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
              <NavLink
                onClick={handleOpenMenu}
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.listSandwichActive : classes.listSandwich
                }
              >
                Abous us
              </NavLink>
            </li>
          </p>
          <p>
            <li>
              <NavLink
                onClick={handleOpenMenu}
                to="/menu"
                className={({ isActive }) =>
                  isActive ? classes.listSandwichActive : classes.listSandwich
                }
              >
                Menu
              </NavLink>
            </li>
          </p>
          <p>
            <li>
              <NavLink
                onClick={handleOpenMenu}
                to="/reservation"
                className={({ isActive }) =>
                  isActive ? classes.listSandwichActive : classes.listSandwich
                }
              >
                Reservation
              </NavLink>
            </li>
          </p>
          <p>
            <li>
              <NavLink
                onClick={handleOpenMenu}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.listSandwichActive : classes.listSandwich
                }
              >
                Contact Us
              </NavLink>
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
        <a></a>
        <div className={classes.nothing}>
          <a
            onClick={handleOpenMenu}
            className={isMenu ? classes.buttonChange : classes.button}
          >
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
          </a>
          <div>{menu}</div>
          <Link className={classes.wrapper}>
            <img
              onClick={isMenu ? handleOpenMenu : null}
              className={classes.img}
              src={logo}
              alt="A logo"
            />
          </Link>
        </div>
        <ul className={classes.ulist}>
          <p></p>
          <p>
            <Link className={classes.wrapper}>
              <img className={classes.img} src={logo} alt="A logo" />
            </Link>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.listActive : classes.list
                }
                to="/"
              >
                Abous us
              </NavLink>
            </li>
          </p>
          <p>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.listActive : classes.list
                }
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
          </p>
          <p>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.listActive : classes.list
                }
                to="/reservation"
              >
                Reservation
              </NavLink>
            </li>
          </p>
          <p>
            <li className={classes.li}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.listActive : classes.list
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </p>
        </ul>
      </main>
    </>
  );
}
