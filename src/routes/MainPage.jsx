import { Outlet } from "react-router-dom";
import HomePage from "../components/About/HomePage";

export default function MainPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <Outlet />
      <div>
        <HomePage />
      </div>
    </>
  );
}
