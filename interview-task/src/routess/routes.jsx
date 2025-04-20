import React from "react";
import Home from "../components/Home";
import { Routes, Route } from "react-router-dom"; // "react-router" should be "react-router-dom"

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesComponent;
