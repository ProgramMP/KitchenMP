import { Outlet } from "react-router-dom";
import Reservation from "../components/Reservation/Reservation";
import Footer from "../components/Footer/Footer";

export default function ReservationPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <div>
        <Reservation />
      </div>
      <Footer />
    </>
  );
}
