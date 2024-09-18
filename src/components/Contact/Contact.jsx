import { useRef } from "react";
import useHttp from "../../hooks/useHttp";
import ErrorBlock from "../UI/ErrorBlock";
import classes from "./Contact.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Contact() {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
  } = useHttp("https://backend-kitchen.onrender.com/contacts", requestConfig);

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        contact: {
          customer: customerData,
        },
      })
    );

    name.current.value = "";
    email.current.value = "";
    message.current.value = "";
  }

  let actions = (
    <>
      <button className={classes.button}>Submit</button>
    </>
  );

  if (isSending) {
    actions = <span className={classes.fetch}>Sending order data...</span>;
  }
  if (error) {
    actions = (
      <div className={classes.error}>
        <ErrorBlock title="Failed to submit order" message={error} />;
        <button className={classes.button}>Try Again</button>
      </div>
    );
  }

  if (data && !error) {
    actions = (
      <div>
        <span className={classes.fetch}>Success!</span>
        <button className={classes.button}>Submit</button>
      </div>
    );
  }

  return (
    <>
      <h1 className={classes.h1}>Contact</h1>
      <main className={classes.main}>
        <p>
          For any assistance or to make a reservation, please feel free to
          contact us at +359877115125, via email at daniel.katsanski@gmail.com
          or at an address.
        </p>
        <form onSubmit={handleSubmit}>
          <p className={classes.control}>
            <label htmlFor="name">Full Name</label>
            <input
              className={classes.input}
              ref={name}
              id="name"
              name="name"
              required
            />
          </p>
          <p className={classes.control}>
            <label htmlFor="email">E-Mail Address</label>
            <input
              className={classes.input}
              ref={email}
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className={classes.control}>
            <label htmlFor="message">Message</label>
            <textarea
              className={classes.textarea}
              ref={message}
              type="text"
              id="message"
              name="message"
              required
            />
          </p>
          {actions}
        </form>
      </main>
    </>
  );
}
