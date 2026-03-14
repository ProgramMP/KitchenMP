import { useRef, useState } from "react";
import useHttp from "../../hooks/useHttp";
import ErrorBlock from "../UI/ErrorBlock";
import classes from "./Reservation.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function Reservation() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const date = useRef();
  const people = useRef();
  const time = useRef();
  const comment = useRef();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
  } = useHttp(
    "https://backend-kitchen.onrender.com/reservations",
    requestConfig,
  );

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    const prevMonth = new Date(year, month - 1, 0);
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonth.getDate() - i,
        isOtherMonth: true,
        fullDate: new Date(year, month - 1, prevMonth.getDate() - i),
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: day,
        isOtherMonth: false,
        fullDate: new Date(year, month, day),
      });
    }

    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: day,
        isOtherMonth: true,
        fullDate: new Date(year, month + 1, day),
      });
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const selectDate = (day) => {
    if (day.isOtherMonth) return;
    setSelectedDate(day.fullDate);
    if (date.current) {
      date.current.value = day.fullDate.toISOString().split("T")[0];
    }
  };

  const selectTime = (timeValue) => {
    setSelectedTime(timeValue);
    if (time.current) {
      time.current.value = timeValue;
    }
  };

  const isSameDay = (date1, date2) => {
    return date1.toDateString() === date2.toDateString();
  };

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        reservation: {
          customer: customerData,
        },
      }),
    );

    firstName.current.value = "";
    lastName.current.value = "";
    email.current.value = "";
    phone.current.value = "";
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
      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <h1 className={classes.heroTitle}>Book a Table</h1>
          <p className={classes.heroDescription}>
            Secure your place for an unforgettable culinary journey at
            KitchenMP.
          </p>
        </div>
      </div>

      <div className={classes.formContainer}>
        <div className={classes.formCard}>
          <form onSubmit={handleSubmit}>
            <section className={classes.section}>
              <h3 className={classes.sectionTitle}>Group Size</h3>
              <div className={classes.partySizeContainer}>
                <label className={classes.partySizeOption}>
                  <span>1 Guest</span>
                  <input
                    type="radio"
                    name="people"
                    value="1"
                    ref={people}
                    className={classes.radioInput}
                  />
                </label>
                <label className={classes.partySizeOption}>
                  <span>2 Guests</span>
                  <input
                    type="radio"
                    name="people"
                    value="2"
                    ref={people}
                    className={classes.radioInput}
                    defaultChecked
                  />
                </label>
                <label className={classes.partySizeOption}>
                  <span>3-4 Guests</span>
                  <input
                    type="radio"
                    name="people"
                    value="3-4"
                    ref={people}
                    className={classes.radioInput}
                  />
                </label>
                <label className={classes.partySizeOption}>
                  <span>5-6 Guests</span>
                  <input
                    type="radio"
                    name="people"
                    value="5-6"
                    ref={people}
                    className={classes.radioInput}
                  />
                </label>
                <label className={classes.partySizeOption}>
                  <span>7-10+ Guests</span>
                  <input
                    type="radio"
                    name="people"
                    value="7-10+"
                    ref={people}
                    className={classes.radioInput}
                  />
                </label>
              </div>
            </section>

            <div className={classes.gridContainer}>
              <section>
                <h3 className={classes.sectionTitle}>Select Date</h3>
                <div className={classes.dateSection}>
                  <div className={classes.calendarHeader}>
                    <button
                      type="button"
                      className={classes.calendarNav}
                      onClick={() => navigateMonth(-1)}
                    >
                      ‹
                    </button>
                    <span className={classes.calendarMonth}>
                      {monthNames[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </span>
                    <button
                      type="button"
                      className={classes.calendarNav}
                      onClick={() => navigateMonth(1)}
                    >
                      ›
                    </button>
                  </div>
                  <div className={classes.calendarGrid}>
                    {dayNames.map((day) => (
                      <div key={day} className={classes.dayHeader}>
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className={classes.calendarDays}>
                    {getDaysInMonth(currentDate).map((day, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`${classes.calendarDay} ${
                          day.isOtherMonth ? classes.otherMonth : ""
                        } ${
                          isSameDay(day.fullDate, selectedDate)
                            ? classes.selected
                            : ""
                        }`}
                        onClick={() => selectDate(day)}
                      >
                        {day.date}
                      </button>
                    ))}
                  </div>
                  <input
                    type="hidden"
                    name="date"
                    ref={date}
                    defaultValue={selectedDate.toISOString().split("T")[0]}
                    className={classes.hiddenDateInput}
                  />
                </div>
              </section>

              <section>
                <h3 className={classes.sectionTitle}>Select Time</h3>
                <div className={classes.timeGrid}>
                  {[
                    { time: "11:00", value: "1100" },
                    { time: "12:00", value: "1200" },
                    { time: "13:00", value: "1300" },
                    { time: "14:00", value: "1400" },
                    { time: "15:00", value: "1500" },
                    { time: "16:00", value: "1600" },
                    { time: "17:00", value: "1700" },
                    { time: "18:00", value: "1800" },
                    { time: "19:00", value: "1900" },
                    { time: "20:00", value: "2000" },
                    { time: "21:00", value: "2100" },
                    { time: "22:00", value: "2200" },
                  ].map(({ time, value }) => (
                    <button
                      key={value}
                      type="button"
                      className={`${classes.timeButton} ${
                        selectedTime === value ? classes.timeSelected : ""
                      }`}
                      onClick={() => selectTime(value)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  name="time"
                  ref={time}
                  defaultValue="1900"
                />
                <p className={classes.timeNote}>
                  Available slots for today. Weekend bookings might have limited
                  availability.
                </p>
              </section>
            </div>

            <section className={classes.contactSection}>
              <h3 className={classes.sectionTitle}>Contact Information</h3>
              <div className={classes.contactGrid}>
                <div className={classes.inputGroup}>
                  <label className={classes.inputLabel}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    ref={firstName}
                    className={classes.input}
                    placeholder="John"
                    required
                  />
                </div>
                <div className={classes.inputGroup}>
                  <label className={classes.inputLabel}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    ref={lastName}
                    className={classes.input}
                    placeholder="Doe"
                    required
                  />
                </div>
                <div className={classes.inputGroup}>
                  <label className={classes.inputLabel}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    ref={email}
                    className={classes.input}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className={classes.inputGroup}>
                  <label className={classes.inputLabel}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    ref={phone}
                    className={classes.input}
                    placeholder="+359"
                    required
                  />
                </div>
                <div className={`${classes.inputGroup} ${classes.fullWidth}`}>
                  <label className={classes.inputLabel}>Special Requests</label>
                  <textarea
                    name="comments"
                    ref={comment}
                    className={classes.textarea}
                    placeholder="Allergies, seating preference, special occasion..."
                    rows="3"
                  />
                </div>
              </div>
            </section>

            <div className={classes.submitSection}>
              {isSending ? (
                <span className={classes.fetch}>Sending reservation...</span>
              ) : error ? (
                <div className={classes.errorSection}>
                  <ErrorBlock
                    title="Failed to submit reservation"
                    message={error}
                  />
                  <button type="submit" className={classes.submitButton}>
                    <span>Try Again</span>
                    <span className={classes.arrow}>→</span>
                  </button>
                </div>
              ) : data && !error ? (
                <div className={classes.successSection}>
                  <span className={classes.successMessage}>
                    Reservation confirmed successfully!
                  </span>
                  <button type="submit" className={classes.submitButton}>
                    <span>Book Another Table</span>
                    <span className={classes.arrow}>→</span>
                  </button>
                </div>
              ) : (
                <button type="submit" className={classes.submitButton}>
                  <span>Confirm Reservation</span>
                </button>
              )}
              <p className={classes.disclaimer}>
                By confirming, you agree to our booking terms and cancellation
                policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
