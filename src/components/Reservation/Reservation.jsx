import classes from "./Reservation.module.css";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Reservation() {
  return (
    <>
      <h1 className={classes.h1}>Reservation</h1>
      <main className={classes.main}>
        <form>
          <div className={classes.form}>
            <p>
              <label>First Name</label>
              <input type="text" required />
            </p>
            <p>
              <label>Last Name</label>
              <input type="text" required />
            </p>
            <p>
              <label>E-Mail Address</label>
              <input type="email" required />
            </p>
            <p>
              <label>Date</label>
              <input type="date" required />
            </p>
            <p>
              <label>Number of People</label>
              <select type="select" required defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled></option>
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
              <label>Time</label>
              <select type="select" required defaultValue={"DEFAULT"}>
                <option value="DEFAULT" disabled></option>
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
            <label>Comments (optional)</label>
            <textarea className={classes.textarea} type="text" />
          </p>
          <button className={classes.button}>Book a table</button>
        </form>
      </main>
    </>
  );
}
