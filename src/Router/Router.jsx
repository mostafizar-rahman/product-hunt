import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import App from "../App";
import Checkout from "../pages/Checkout";
import Products from "../pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
