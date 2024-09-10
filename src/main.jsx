import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import MainPage from "./routes/MainPage.jsx";
import MenuPage from "./routes/MenuPage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import ReservationPage from "./routes/ReservationPage.jsx";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgressContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
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
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProgressContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserProgressContextProvider>
  </StrictMode>
);
