import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Nav/SignUp.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import HomePage from "./HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
