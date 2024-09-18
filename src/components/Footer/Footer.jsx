import { NavLink } from "react-router-dom";
import logo from "../../assets/MP2.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/telephone.png";
import location from "../../assets/location.png";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <img className={classes.img} src={logo} alt="A logo" />
      </div>
      <div className={classes.browse}>
        <p className={classes.header}>Browse</p>
        <ul className={classes.ul}>
          <li className={classes.listItemBrowse}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.listActive : classes.list
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </li>
          <li className={classes.listItemBrowse}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.listActive : classes.list
              }
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li className={classes.listItemBrowse}>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.listActive : classes.list
              }
              to="/reservation"
            >
              Reservation
            </NavLink>
          </li>
          <li className={classes.listItemBrowse}>
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
      <div className={classes.contact}>
        <p className={classes.header}>Contact</p>
        <ul className={classes.ul}>
          <li className={classes.listItemContact}>
            <img className={classes.icons} src={location}></img> Pleven,
            Bulgaria
          </li>
          <li className={classes.listItemContact}>
            <img className={classes.icons} src={mail}></img>{" "}
            daniel.katsanski@gmail.com
          </li>
          <li className={classes.listItemContact}>
            <img className={classes.icons} src={phone}></img> +359877115125
          </li>
        </ul>
      </div>
    </footer>
  );
}
