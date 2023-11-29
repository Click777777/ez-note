import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import Admin from "./components/Admin";
import Update from "./components/Update";
import Post from "./components/Post";
import Login from "./components/Login";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { Context } from "./contexts/CourseContext";
import Overlay from "./components/subComponent/Overlay";
import Example from "./components/subComponent/Example";

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
        <Route path="/post" element={<Post />} />
        <Route path="/update" element={<Update />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overlay" element={<Example />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
