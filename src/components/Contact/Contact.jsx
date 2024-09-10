import Button from "../UI/Button";
import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <main className={classes.main}>
        <h1>Contact</h1>
        <p>
          For any assistance or to make a reservation, please feel free to
          contact us at +359877115125, via email at daniel.katsanski@gmail.com
          or at an address.
        </p>
        <form>
          <p className={classes.control}>
            <label>Full Name</label>
            <input className={classes.input} type="text" required />
          </p>
          <p className={classes.control}>
            <label>E-Mail Address</label>
            <input className={classes.input} type="email" required />
          </p>
          <p className={classes.control}>
            <label>Message</label>
            <textarea className={classes.textarea} type="text" required />
          </p>
          <button className={classes.button}>Submit</button>
        </form>
      </main>
    </>
  );
}
