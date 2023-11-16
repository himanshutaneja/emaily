import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header";
import Landing from "./landing";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/surveys" element={<div>Dashboard</div>} />
          <Route path="/surveys/new" element={<div>Survey New</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
