import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/App";
import authReducer from "./features/authSlice";
import "materialize-css/dist/css/materialize.min.css";

const store = configureStore({
  reducer: { auth: authReducer },
});

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
