import { useDispatch } from "react-redux";
import { menuActions } from "../Store/Sandwich";
import { Outlet } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  const dispatch = useDispatch();

  return (
    <>
      <MenuBar />
      <div onClick={() => dispatch(menuActions.hideMenu())}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
