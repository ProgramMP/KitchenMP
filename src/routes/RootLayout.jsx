import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";

export default function RootLayout() {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
}
