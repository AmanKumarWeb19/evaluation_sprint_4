import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";

// all the routing using the routing library should be done from here;

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
