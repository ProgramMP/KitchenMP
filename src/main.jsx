import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import RootLayout from "./routes/RootLayout.jsx";
import MainPage from "./routes/MainPage.jsx";
import MenuPage from "./routes/MenuPage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import ReservationPage from "./routes/ReservationPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/reservation",
        element: <ReservationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
        errorElement: <ErrorPage />,
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
