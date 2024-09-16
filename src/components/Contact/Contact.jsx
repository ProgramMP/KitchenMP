import { useState } from "react";
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
  const [txt, setTxt] = useState("");
  const [txt2, setTxt2] = useState("");
  const [txt3, setTxt3] = useState("");
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

    setTxt("");
    setTxt2("");
    setTxt3("");
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
    actions = <ErrorBlock title="Failed to submit order" message={error} />;
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
              onChange={(event) => setTxt(event.target.value)}
              value={txt}
              id="name"
              name="name"
              required
            />
          </p>
          <p className={classes.control}>
            <label htmlFor="email">E-Mail Address</label>
            <input
              className={classes.input}
              onChange={(event) => setTxt2(event.target.value)}
              value={txt2}
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
              onChange={(event) => setTxt3(event.target.value)}
              value={txt3}
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
