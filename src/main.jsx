import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import RootLayout from "./routes/RootLayout.jsx";
import MainPage from "./routes/MainPage.jsx";
import MenuPage from "./routes/MenuPage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import ReservationPage from "./routes/ReservationPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/about-us" />,
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about-us",
        element: <MainPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/reservation",
        element: <ReservationPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
