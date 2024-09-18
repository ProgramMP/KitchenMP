import { Outlet } from "react-router-dom";
import Reservation from "../components/Reservation/Reservation";

export default function ReservationPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Outlet />
      <div>
        <Reservation />
      </div>
    </>
  );
}
