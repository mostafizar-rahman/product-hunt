import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import Products from "./pages/Products.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Products />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
