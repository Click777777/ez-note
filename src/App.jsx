import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Admin from "./components/Admin";
import Login from "./components/Login";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { Context } from "./contexts/CourseContext";
import CourseDetail from "./components/CourseDetail";

const App = () => {
  const { state1 } = useContext(Context);
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isLoggedIn={state1}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<CourseDetail />} /> */}

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
