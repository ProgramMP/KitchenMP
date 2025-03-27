import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./About.module.css";

export default function About({ title, text, img, alt, link, buttonName }) {
  return (
    <div className={classes.area}>
      <h2 className={classes.h2}>{title}</h2>
      <LazyLoadImage className={classes.img} src={img} alt={alt} />
      <p className={classes.p}>{text}</p>
      <Link className={classes.a} to={link}>
        {buttonName}
      </Link>
    </div>
  );
}
