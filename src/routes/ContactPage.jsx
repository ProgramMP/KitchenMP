import { Outlet } from "react-router-dom";
import Contact from "../components/Contact/Contact";

export default function ContactPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Outlet />
      <div>
        <Contact />
      </div>
    </>
  );
}
