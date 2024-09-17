import { useRef } from "react";
import useHttp from "../../hooks/useHttp";
import ErrorBlock from "../UI/ErrorBlock";
import classes from "./Reservation.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Reservation() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const date = useRef();
  const people = useRef();
  const time = useRef();
  const comment = useRef();

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
  } = useHttp(
    "https://backend-kitchen.onrender.com/reservations",
    requestConfig
  );

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        reservation: {
          customer: customerData,
        },
      })
    );

    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    date.current.value = "";
    people.current.value = "";
    time.current.value = "";
    comment.current.value = "";
  }

  let actions = (
    <>
      <button className={classes.button}>Book a table</button>
    </>
  );

  if (isSending) {
    actions = <span className={classes.fetch}>Sending order data...</span>;
  }
  if (error) {
    actions = (
      <div className={classes.fetch}>
        <ErrorBlock title="Failed to submit order" message={error} />
        <button className={classes.button}>Try Again</button>
      </div>
    );
  }

  if (data && !error) {
    actions = (
      <>
        <span className={classes.fetch}>Success!</span>;
        <button className={classes.button}>Book a table</button>
      </>
    );
  }

  return (
    <>
      <h1 className={classes.h1}>Reservation</h1>
      <main className={classes.main}>
        <form onSubmit={handleSubmit}>
          <div className={classes.form}>
            <p>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                ref={firstName}
                required
              />
            </p>
            <p>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                ref={lastName}
                required
              />
            </p>
            <p>
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="email"
                id="email"
                name="email"
                ref={email}
                required
              />
            </p>
            <p>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                defaultValue={""}
                ref={date}
                required
              />
            </p>
            <p>
              <label htmlFor="people">Number of People</label>
              <select
                type="select"
                id="people"
                name="people"
                ref={people}
                required
                defaultValue={""}
              >
                <option value="" hidden></option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9+">9+ People</option>
              </select>
            </p>
            <p>
              <label htmlFor="time">Time</label>
              <select
                type="select"
                id="time"
                name="time"
                ref={time}
                required
                defaultValue={""}
              >
                <option value="" hidden></option>
                <option value="2300">11:00 PM</option>
                <option value="2230">10:30 PM</option>
                <option value="2200">10:00 PM</option>
                <option value="2130">9:30 PM</option>
                <option value="2100">9:00 PM</option>
                <option value="2030">8:30 PM</option>
                <option value="2000">8:00 PM</option>
                <option value="1930">7:30 PM</option>
                <option value="1900">7:00 PM</option>
                <option value="1830">6:30 PM</option>
                <option value="1800">6:00 PM</option>
                <option value="1730">5:30 PM</option>
                <option value="1700">5:00 PM</option>
                <option value="1630">4:30 PM</option>
                <option value="1600">4:00 PM</option>
                <option value="1530">3:30 PM</option>
                <option value="1500">3:00 PM</option>
                <option value="1430">2:30 PM</option>
                <option value="1400">2:00 PM</option>
                <option value="1330">1:30 PM</option>
                <option value="1300">1:00 PM</option>
                <option value="1230">12:30 PM</option>
                <option value="1200">12:00 PM</option>
                <option value="1130">11:30 AM</option>
                <option value="1100">11:00 AM</option>
                <option value="1030">10:30 AM</option>
                <option value="1000">10:00 AM</option>
                <option value="0930">9:30 AM</option>
                <option value="0900">9:00 AM</option>
                <option value="0830">8:30 AM</option>
                <option value="0800">8:00 AM</option>
                <option value="0930">7:30 AM</option>
                <option value="0930">7:00 AM</option>
              </select>
            </p>
          </div>
          <p className={classes.comments}>
            <label htmlFor="comments">Comments (optional)</label>
            <textarea
              className={classes.textarea}
              id="comments"
              name="comments"
              type="text"
              ref={comment}
            />
          </p>
          {actions}
        </form>
      </main>
    </>
  );
}
