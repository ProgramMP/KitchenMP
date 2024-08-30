import { Link } from "react-router-dom";
import logo from "../assets/KitchenLogo1.jpg";
import classes from "./MenuBar.module.css";

export default function MenuBar() {
  return (
    <>
      <ul className={classes.ulist}>
        <li className={classes.li}>
          <Link className={classes.wrapper}>
            <img className={classes.img} src={logo} alt="A restaurant" />
          </Link>
        </li>
        <li>
          <p className={classes.li}>
            <Link className={classes.list} to="/">
              Abous us
            </Link>
          </p>
        </li>
        <li>
          <p className={classes.li}>
            <Link className={classes.list} to="/menu">
              Menu
            </Link>
          </p>
        </li>
        <p>
          <li className={classes.li}>
            <Link className={classes.list} to="/contact">
              Contact Us
            </Link>
          </li>
        </p>
      </ul>
    </>
  );
}
