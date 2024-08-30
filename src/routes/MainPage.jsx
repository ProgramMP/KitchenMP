import { Outlet } from "react-router-dom";
import HomePage from "../components/HomePage";

export default function MainPage() {
  return (
    <>
      <Outlet />
      <main>
        <HomePage />
      </main>
    </>
  );
}
