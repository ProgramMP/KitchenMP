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
    const handleResize = () => {
      if (window.innerWidth > 900) {
        dispatch(menuActions.hideMenu());
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  isActive ? classes.listActive : classes.list
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
                  isActive ? classes.listActive : classes.list
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
                  isActive ? classes.listActive : classes.list
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
                  isActive ? classes.listActive : classes.list
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
      <header className={classes.main}>
        <a></a>
        <div>
          <div
            onClick={handleOpenMenu}
            className={isMenu ? classes.buttonChange : classes.button}
          >
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
          </div>
          <div>{menu}</div>
        </div>
        <div className={classes.wrapper}>
          <div>
            <Link>
              <img className={classes.menuImg} src={logo} alt="A logo" />
            </Link>
          </div>
          <div>
            <ul className={classes.ulist}>
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
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
