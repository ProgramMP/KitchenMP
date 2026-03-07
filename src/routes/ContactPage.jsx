import { Outlet } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function ContactPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
