import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../Store/Sandwich";
import logo from "../assets/KitchenLogo1.jpg";
import classes from "./MenuBar.module.css";

export default function MenuBar() {
  const isMenu = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  const [menu, setMenu] = useState();

  function handleOpenMenu() {
    dispatch(menuActions.showHideMenu());
  }

  function handleCloseMenu() {
    dispatch(menuActions.hideMenu());
  }

  useEffect(() => {
    if (isMenu) {
      setMenu(
        <ul className={classes.smenu}>
          <p>
            <li>
              <NavLink
                onClick={handleOpenMenu}
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? classes.listSandwichActive : classes.listSandwich
                }
              >
                About us
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
                to="/contact-us"
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
        <a onClick={() => dispatch(menuActions.hideMenu())}></a>
        <div
          onClick={isMenu ? handleCloseMenu : null}
          className={classes.nothing}
        >
          <a
            onClick={handleOpenMenu}
            className={isMenu ? classes.buttonChange : classes.button}
          >
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
          </a>
          <div>{menu}</div>
          <div>
            <Link className={classes.wrapper}>
              <img
                onClick={isMenu ? handleOpenMenu : null}
                className={classes.img}
                src={logo}
                alt="A logo"
              />
            </Link>
          </div>
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
                to="/about-us"
              >
                About us
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
                to="/contact-us"
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
